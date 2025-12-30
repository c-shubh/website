import { Button } from '@/components/Button';
import { QRCode } from 'antd';
import * as React from 'react';
import { useState } from 'react';

function doDownload(url: string, fileName: string) {
	const a = document.createElement('a');
	a.download = fileName;
	a.href = url;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

const downloadCanvasQRCode = () => {
	const canvas = document
		.getElementById('tools-qr-code-generator-canvas')
		?.querySelector<HTMLCanvasElement>('canvas');
	if (canvas) {
		const url = canvas.toDataURL();
		doDownload(url, `QRCode-${Date.now()}.png`);
	}
};

const copyCanvasQRCode = async () => {
	const canvas = document
		.getElementById('tools-qr-code-generator-canvas')
		?.querySelector<HTMLCanvasElement>('canvas');
	if (canvas) {
		return new Promise<void>((resolve) => {
			canvas.toBlob(async (blob) => {
				if (blob) {
					await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
				}
				resolve();
			}, 'image/png');
		});
	}
};

const downloadSvgQRCode = () => {
	const svg = document
		.getElementById('tools-qr-code-generator-svg')
		?.querySelector<SVGElement>('svg');
	const svgData = new XMLSerializer().serializeToString(svg!);
	const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
	const url = URL.createObjectURL(blob);
	doDownload(url, `QRCode-${Date.now()}.svg`);
};

interface QrCodeProps {
	text: string;
}

function QrCode({ text }: QrCodeProps) {
	return (
		<>
			<QRCode
				id="tools-qr-code-generator-svg"
				value={text || 'https://cshubh.com/tools/qr-code-generator'}
				bgColor="#fff"
				size={250}
				bordered={false}
				type="svg"
			/>
			<div className="hidden">
				<QRCode
					id="tools-qr-code-generator-canvas"
					value={text || 'https://cshubh.com/tools/qr-code-generator'}
					bgColor="#fff"
					size={250}
					bordered={false}
					type="canvas"
				/>
			</div>
		</>
	);
}

type Count = 'one' | 'many';

export function PlainTextQrCodeGenerator() {
	const [text, setText] = useState('');
	const [count, setCount] = React.useState<Count | null>('one');
	const [copied, setCopied] = React.useState(false);

	// TODO: wifi and upi qr code
	return (
		<div className="flex flex-col gap-4">
			<textarea
				placeholder="Enter text"
				rows={10}
				value={text}
				onChange={(e) => setText(e.target.value)}
				className="p-2 resize-y"
				autoFocus
			/>
			<div className="sm:space-x-4">
				{[
					{ value: 'one', label: 'Single QR Code' },
					{ value: 'many', label: 'Multiple QR Codes (one per line)' },
				].map((option) => (
					<div className="sm:inline space-x-2" key={option.value}>
						<input
							type="radio"
							name="count"
							value={option.value}
							checked={count === option.value}
							onChange={() => setCount(option.value as Count)}
							id={`tools-qr-code-generator-count-${option.value}`}
						/>
						<label htmlFor={`tools-qr-code-generator-count-${option.value}`}>{option.label}</label>
					</div>
				))}
			</div>
			{count === 'one' && (
				<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
					<QrCode text={text} />
					<div className="flex flex-col gap-4">
						<Button
							onClick={async () => {
								await copyCanvasQRCode();
								setCopied(true);
								setTimeout(() => setCopied(false), 800);
							}}
							disabled={copied}
						>
							{copied ? 'Copied' : 'Copy'} to Clipboard
						</Button>
						<div className="flex gap-2">
							Download as
							<Button
								onClick={() => {
									downloadCanvasQRCode();
								}}
							>
								PNG
							</Button>
							<Button
								onClick={() => {
									downloadSvgQRCode();
								}}
							>
								SVG
							</Button>
						</div>
					</div>
				</div>
			)}
			{count === 'many' && (
				<div className="flex flex-col items-center gap-8">
					{(text.trim() === ''
						? // if text is empty, then show a single qr code
						  ['https://cshubh.com/tools/qr-code-generator']
						: // one qr for each non empty line
						  text
								.trim()
								.split('\n')
								.filter((e) => e.trim() !== '')
					).map((line, index) => (
						<React.Fragment key={index}>
							<div className="flex flex-col items-center gap-4">
								<div>
									QR Code #{index + 1}. <code>{line}</code>
								</div>
								<QrCode text={text} />
							</div>
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
}
