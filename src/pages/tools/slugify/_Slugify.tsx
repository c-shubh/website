import { CopyButton } from '@/components/CopyButton';
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
						<CopyButton getText={() => output.join('\n')} />
					</div>
					<ul className="mt-0">
						{output.map((line, index) => (
							<li key={index} className="select-all">
								{line}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
