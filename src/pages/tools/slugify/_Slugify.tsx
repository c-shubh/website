import { Button } from '@/components/Button';
import { copyToClipboard } from '@/utils';
import slugify from '@sindresorhus/slugify';
import { useState } from 'react';

export function Slugify() {
	const [output, setOutput] = useState<string[]>([]);
	const [copied, setCopied] = useState(false);

	const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		const inputText = event.target.value.trim();
		if (!inputText) setOutput([]);
		else {
			const inputLines = inputText.split('\n');
			const slugLines = inputLines.map((line: string) => slugify(line));
			setOutput(slugLines);
		}
	};

	return (
		<>
			<div className="flex flex-col gap-4">
				<textarea
					placeholder="Enter text here"
					rows={10}
					className="px-2 py-2 resize-y"
					onChange={handleChange}
					autoFocus
				/>
				<div className="flex flex-col gap-2">
					<div className="flex gap-2">
						<h3 className="m-0">Output</h3>
						<Button
							onClick={async () => {
								await copyToClipboard(output.join('\n'));
								setCopied(true);
								setTimeout(() => setCopied(false), 800);
							}}
							disabled={copied}
						>
							{copied ? 'Copied' : 'Copy'}
						</Button>
					</div>
					<ul className="mt-0">
						{output.map((line, index) => (
							<li key={index}>{line}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
