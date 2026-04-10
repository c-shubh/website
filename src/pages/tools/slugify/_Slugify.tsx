import { CopyButton } from '@/components/CopyButton';
import slugify from '@sindresorhus/slugify';
import { useState } from 'react';

export function Slugify() {
	const [output, setOutput] = useState<string[]>([]);

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
			<div>
				<textarea placeholder="Enter text here" rows={10} onChange={handleChange} autoFocus />
				<div>
					<div>
						<h3>Output</h3>
						<CopyButton getText={() => output.join('\n')} />
					</div>
					<ul>
						{output.map((line, index) => (
							<li key={index}>{line}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
