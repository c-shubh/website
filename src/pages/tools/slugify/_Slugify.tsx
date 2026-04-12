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
		<div className="space-y-6">
			<div>
				<label htmlFor="tool-slugify-input" className="sr-only">
					Text to convert
				</label>
				<textarea
					id="tool-slugify-input"
					placeholder="Enter text here"
					rows={10}
					className="textarea resize-y w-full"
					onChange={handleChange}
					autoFocus
				/>
			</div>
			<div className="flex items-center gap-2">
				<h2 className="mt-0 mb-0">Output</h2>
				<CopyButton getText={() => output.join('\n')} className={'btn-xs'} />
			</div>

			{output.length > 0 && (
				<output htmlFor="tool-slugify-input" className="block">
					<ul className="mt-0">
						{output.map((line, index) => (
							<li key={index} className="select-all">
								{line}
							</li>
						))}
					</ul>
				</output>
			)}
		</div>
	);
}
