import { Button } from '@/components/Button';
import { useRef, useState } from 'react';

export function CameraMicTest() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const [stream, setStream] = useState<MediaStream | null>(null);
	const [isMirrored, setIsMirrored] = useState(false);
	const [isRecording, setIsRecording] = useState(false);
	const [audioUrl, setAudioUrl] = useState<string | null>(null);

	const startMedia = async () => {
		try {
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true,
			});
			setStream(mediaStream);
			if (videoRef.current) {
				videoRef.current.srcObject = mediaStream;
			}
		} catch (err) {
			alert(err);
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
		mediaRecorderRef.current = new MediaRecorder(stream);
		mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
		mediaRecorderRef.current.onstop = () => {
			const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
			setAudioUrl(URL.createObjectURL(blob));
		};
		mediaRecorderRef.current.start();
		setIsRecording(true);
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
		<div className="flex flex-col gap-4">
			<div className="flex flex-wrap gap-2">
				{!stream ? (
					<Button onClick={startMedia}>Turn on Camera & Mic</Button>
				) : (
					<>
						<Button onClick={stopMedia}>Turn off Camera & Mic</Button>
						<Button onClick={() => setIsMirrored(!isMirrored)}>Mirror Video</Button>
						<Button onClick={takePicture}>Take Photo</Button>

						{!isRecording ? (
							<Button onClick={startRecording}>Record Audio</Button>
						) : (
							<Button onClick={stopRecording}>Stop Recording</Button>
						)}
					</>
				)}
			</div>
			{audioUrl && (
				<div className="flex flex-col gap-2">
					<p className="text-sm font-bold">Playback Recording:</p>
					<audio src={audioUrl} controls className="w-full max-w-md" />
				</div>
			)}
			<video
				ref={videoRef}
				autoPlay
				playsInline
				muted
				className={`w-full ${isMirrored ? '-scale-x-100' : ''}`}
			/>
		</div>
	);
}
