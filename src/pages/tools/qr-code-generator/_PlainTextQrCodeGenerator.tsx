import { Button } from '@/components/Button';
import { CopyButton } from '@/components/CopyButton';
import { QRCode } from 'antd';
import * as React from 'react';
import { useState } from 'react';

const initialText = `https://cshubh.com/tools/qr-code-generator/`;

function getQRCodeCanvas() {
	return document
		.getElementById('tools-qr-code-generator-canvas')
		?.querySelector<HTMLCanvasElement>('canvas');
}

function doDownload(url: string, fileName: string) {
	const a = document.createElement('a');
	a.download = fileName;
	a.href = url;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

const downloadCanvasQRCode = () => {
	const canvas = getQRCodeCanvas();
	if (canvas) {
		const url = canvas.toDataURL();
		doDownload(url, `QRCode-${Date.now()}.png`);
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
				value={text || initialText}
				bgColor="#fff"
				size={250}
				bordered={false}
				type="svg"
			/>
			<div>
				<QRCode
					id="tools-qr-code-generator-canvas"
					value={text || initialText}
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

	// TODO: wifi and upi qr code
	return (
		<div>
			<textarea
				placeholder="Enter text"
				rows={10}
				value={text}
				onChange={(e) => setText(e.target.value)}
				autoFocus
			/>
			<div>
				{[
					{ value: 'one', label: 'Single QR Code' },
					{ value: 'many', label: 'Multiple QR Codes (one per line)' },
				].map((option) => (
					<div key={option.value}>
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
				<div>
					<QrCode text={text} />
					<div>
						<CopyButton getCanvas={getQRCodeCanvas} />
						<div>
							Download as
							<Button onClick={downloadCanvasQRCode}>PNG</Button>
							<Button onClick={downloadSvgQRCode}>SVG</Button>
						</div>
					</div>
				</div>
			)}
			{count === 'many' && (
				<div>
					{(text.trim() === ''
						? // if text is empty, then show a single qr code
							[initialText]
						: // one qr for each non empty line
							text
								.trim()
								.split('\n')
								.filter((e) => e.trim() !== '')
					).map((line, index) => (
						<React.Fragment key={index}>
							<div>
								<div>
									QR Code #{index + 1}. <code>{line}</code>
								</div>
								<QrCode text={line} />
							</div>
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
}
