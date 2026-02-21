import { copyToClipboard } from '@/utils';
import { useState } from 'react';
import { Button } from './Button';

interface Props {
	getText: () => string;
}

export function CopyButton({ getText }: Props) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		await copyToClipboard(getText());
		setCopied(true);
		setTimeout(() => setCopied(false), 800);
	};

	return (
		<Button onClick={handleCopy} disabled={copied}>
			{copied ? 'Copied' : 'Copy'}
		</Button>
	);
}
