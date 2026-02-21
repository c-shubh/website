import { useState } from 'react';
import { Button } from './Button';

type CopyButtonProps =
	| { getText: () => string; getCanvas?: never }
	| { getCanvas: () => HTMLCanvasElement | null | undefined; getText?: never };

export function CopyButton({ getText, getCanvas }: CopyButtonProps) {
	const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

	const handleCopy = async () => {
		try {
			if (getText) {
				await navigator.clipboard.writeText(getText());
			} else if (getCanvas) {
				const canvasEl = getCanvas();
				if (!canvasEl) throw new Error('Canvas element not found');

				const blob = await new Promise<Blob | null>((resolve) =>
					canvasEl.toBlob(resolve, 'image/png')
				);

				if (!blob) throw new Error('Failed to generate image blob');

				await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
			}
			setStatus('copied');
		} catch (err) {
			console.error('Failed to copy:', err);
			setStatus('failed');
		} finally {
			setTimeout(() => setStatus('idle'), 800);
		}
	};

	return (
		<Button onClick={handleCopy} disabled={status !== 'idle'}>
			{status === 'copied' ? 'Copied' : status === 'failed' ? 'Failed' : 'Copy'}
		</Button>
	);
}
