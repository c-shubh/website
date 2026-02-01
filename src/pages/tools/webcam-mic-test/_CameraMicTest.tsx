import { Button } from '@/components/Button';
import { useRef, useState } from 'react';

export function CameraMicTest() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const [stream, setStream] = useState<MediaStream | null>(null);
	const [isMirrored, setIsMirrored] = useState(false);
	const [isRecording, setIsRecording] = useState(false);
	const [audioUrl, setAudioUrl] = useState<string | null>(null);
	const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
	const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
	const [selectedVideoId, setSelectedVideoId] = useState<string>('');
	const [selectedAudioId, setSelectedAudioId] = useState<string>('');

	const startMedia = async () => {
		try {
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true,
			});
			handleStreamSuccess(mediaStream);

			await getDeviceList();
		} catch (err) {
			console.error('Error accessing media:', err);
			alert('Could not access camera/mic. Please check permissions.');
		}
	};

	const handleStreamSuccess = (mediaStream: MediaStream) => {
		setStream(mediaStream);
		if (videoRef.current) {
			videoRef.current.srcObject = mediaStream;
		}

		const videoTrack = mediaStream.getVideoTracks()[0];
		const audioTrack = mediaStream.getAudioTracks()[0];

		if (videoTrack) setSelectedVideoId(videoTrack.getSettings().deviceId || '');
		if (audioTrack) setSelectedAudioId(audioTrack.getSettings().deviceId || '');
	};

	const getDeviceList = async () => {
		try {
			const devices = await navigator.mediaDevices.enumerateDevices();
			setVideoDevices(devices.filter((device) => device.kind === 'videoinput'));
			setAudioDevices(devices.filter((device) => device.kind === 'audioinput'));
		} catch (err) {
			console.error('Error listing devices:', err);
		}
	};

	const switchDevice = async (type: 'video' | 'audio', deviceId: string) => {
		if (type === 'video') setSelectedVideoId(deviceId);
		if (type === 'audio') setSelectedAudioId(deviceId);

		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
		}

		try {
			const newStream = await navigator.mediaDevices.getUserMedia({
				video: { deviceId: type === 'video' ? { exact: deviceId } : { exact: selectedVideoId } },
				audio: { deviceId: type === 'audio' ? { exact: deviceId } : { exact: selectedAudioId } },
			});
			handleStreamSuccess(newStream);
		} catch (err) {
			console.error('Error switching device:', err);
		}
	};

	const stopMedia = () => {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
			setStream(null);
			setAudioUrl(null);
			setIsRecording(false);
			if (videoRef.current) videoRef.current.srcObject = null;
		}
	};

	const startRecording = () => {
		setAudioUrl(null);
		const chunks: Blob[] = [];
		if (!stream) return;
		try {
			mediaRecorderRef.current = new MediaRecorder(stream);
			mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
			mediaRecorderRef.current.onstop = () => {
				const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
				setAudioUrl(URL.createObjectURL(blob));
			};
			mediaRecorderRef.current.start();
			setIsRecording(true);
		} catch (err) {
			console.error('Recorder error:', err);
			alert('Audio recording not supported on this browser/device config.');
		}
	};

	const stopRecording = () => {
		if (!mediaRecorderRef.current) return;
		mediaRecorderRef.current.stop();
		setIsRecording(false);
	};

	const takePicture = () => {
		if (!videoRef.current) return;
		const canvas = document.createElement('canvas');
		canvas.width = videoRef.current.videoWidth;
		canvas.height = videoRef.current.videoHeight;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		if (isMirrored) {
			ctx.translate(canvas.width, 0);
			ctx.scale(-1, 1);
		}
		ctx.drawImage(videoRef.current, 0, 0);
		const link = document.createElement('a');
		link.download = `capture-${Date.now()}.png`;
		link.href = canvas.toDataURL();
		link.click();
	};

	return (
		<div className="space-y-4">
			{!stream ? (
				<Button onClick={startMedia}>Turn on Camera & Mic</Button>
			) : (
				<>
					<div className="flex flex-row flex-wrap gap-4 w-full">
						<Button onClick={stopMedia} className="grow shrink-0 basis-auto whitespace-nowrap">
							Turn off Camera & Mic
						</Button>
						<Button
							onClick={() => setIsMirrored(!isMirrored)}
							className="grow shrink-0 basis-auto whitespace-nowrap"
						>
							Mirror Video
						</Button>
						<Button onClick={takePicture} className="grow shrink-0 basis-auto whitespace-nowrap">
							Take Photo
						</Button>
						{!isRecording ? (
							<Button
								onClick={startRecording}
								className="grow shrink-0 basis-auto whitespace-nowrap"
							>
								Record Audio
							</Button>
						) : (
							<Button
								onClick={stopRecording}
								className="grow shrink-0 basis-auto whitespace-nowrap"
							>
								Stop Recording
							</Button>
						)}
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
						{[
							{
								label: 'Camera',
								value: selectedVideoId,
								type: 'video',
								devices: videoDevices,
							} as const,
							{
								label: 'Microphone',
								value: selectedAudioId,
								type: 'audio',
								devices: audioDevices,
							} as const,
						].map((ele) => (
							<div className="flex flex-col gap-1" key={ele.type}>
								<label className="text-md font-medium">{ele.label}</label>
								<select
									value={ele.value}
									onChange={(e) => switchDevice(ele.type, e.target.value)}
									className="w-full p-2"
								>
									{ele.devices.map((device) => (
										<option key={device.deviceId} value={device.deviceId}>
											{device.label || `${ele.label} ${ele.devices.indexOf(device) + 1}`}
										</option>
									))}
								</select>
							</div>
						))}
					</div>
				</>
			)}

			{audioUrl && (
				<div className="flex flex-col gap-2">
					<span className="text-md font-medium">Playback Recording:</span>
					<audio src={audioUrl} controls className="w-full" />
				</div>
			)}

			<video
				ref={videoRef}
				autoPlay
				playsInline
				muted
				suppressHydrationWarning
				className={`w-full border border-slate-300 rounded-lg transition-transform duration-300 ${
					isMirrored ? '-scale-x-100' : ''
				}`}
			/>
		</div>
	);
}
