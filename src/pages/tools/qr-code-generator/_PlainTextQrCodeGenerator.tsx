import { CopyButton } from '@/components/CopyButton';
import { SITE } from '@/consts';
import { QRCode } from 'antd';
import * as React from 'react';
import { useState } from 'react';

const initialText = SITE;

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
	idSuffix?: string;
}

function QrCode({ text, idSuffix = '' }: QrCodeProps) {
	return (
		<>
			<QRCode
				id={`tools-qr-code-generator-svg${idSuffix}`}
				value={text || initialText}
				bgColor="#fff"
				size={250}
				bordered={false}
				type="svg"
			/>
			<div className="hidden">
				<QRCode
					id={`tools-qr-code-generator-canvas${idSuffix}`}
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
		<div className="flex flex-col gap-6">
			<div>
				<label htmlFor="tool-qr-input-text" className="sr-only">
					Enter text
				</label>
				<textarea
					id="tool-qr-input-text"
					placeholder="Enter text"
					rows={10}
					value={text}
					onChange={(e) => setText(e.target.value)}
					className="resize-y w-full textarea"
					autoFocus
				/>
			</div>

			<fieldset className="sm:space-x-4 flex flex-wrap gap-4 items-center">
				<legend className="sr-only">Generation Mode</legend>
				{[
					{ value: 'one', label: 'Single QR Code' },
					{ value: 'many', label: 'Multiple QR Codes (one per line)' },
				].map((option) => (
					<div className="sm:inline space-x-2 flex items-center" key={option.value}>
						<input
							type="radio"
							name="count"
							value={option.value}
							checked={count === option.value}
							onChange={() => setCount(option.value as Count)}
							id={`tools-qr-code-generator-count-${option.value}`}
							className="radio"
						/>
						<label htmlFor={`tools-qr-code-generator-count-${option.value}`}>{option.label}</label>
					</div>
				))}
			</fieldset>

			<div>
				<h2 className="mt-0">Output</h2>

				<output htmlFor="tool-qr-input-text tools-qr-code-generator-count-one tools-qr-code-generator-count-many">
					{count === 'one' && (
						<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
							<QrCode text={text} />
							<div className="flex flex-col gap-4">
								<CopyButton getCanvas={getQRCodeCanvas} className={'btn-sm'} />
								<div className="flex gap-2 items-center">
									Download as
									<button
										type="button"
										className="btn btn-neutral btn-sm"
										onClick={downloadCanvasQRCode}
									>
										PNG
									</button>
									<button
										type="button"
										className="btn btn-neutral btn-sm"
										onClick={downloadSvgQRCode}
									>
										SVG
									</button>
								</div>
							</div>
						</div>
					)}

					{count === 'many' && (
						<ul className="flex flex-col items-center gap-8 list-none p-0 m-0">
							{(text.trim() === ''
								? // if text is empty, then show a single qr code
								  [initialText]
								: // one qr for each non empty line
								  text
										.trim()
										.split('\n')
										.filter((e) => e.trim() !== '')
							).map((line, index) => (
								<li key={index} className="flex flex-col items-center gap-4">
									<figure className="mt-0 mb-0 flex flex-col items-center gap-2">
										<figcaption className="text-sm">
											QR Code #{index + 1}. <code className="break-all">{line}</code>
										</figcaption>
										<QrCode text={line} idSuffix={`-${index}`} />
									</figure>
								</li>
							))}
						</ul>
					)}
				</output>
			</div>
		</div>
	);
}
