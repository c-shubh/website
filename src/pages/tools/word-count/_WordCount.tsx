import React, { useRef, useState } from 'react';

function countCharWordLine(text: string) {
	if (!text) {
		return { character: 0, word: 0, line: 0 };
	}
	const charCount = text.length;
	let wordCount = 0;
	let lineCount = 1;
	let inWord = false;

	for (let i = 0; i < text.length; i++) {
		if (text[i] === '\n') lineCount++;
		const isWhitespace = text[i] === ' ' || text[i] === '\n' || text[i] === '\t';
		if (!isWhitespace && !inWord) {
			// Starting a new word
			wordCount++;
			inWord = true;
		} else if (isWhitespace) {
			// Ending a word
			inWord = false;
		}
	}
	return {
		character: charCount,
		word: wordCount,
		line: lineCount,
	};
}

export function WordCount() {
	const [count, setCount] = useState({ character: 0, word: 0, line: 0 });
	const textRef = useRef<HTMLTextAreaElement>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (e) => {
			const content = e.target?.result as string;
			textRef.current!.value = content;
			setCount(countCharWordLine(content));
		};
		reader.onerror = () => {
			alert('Error reading file. Please try again.');
		};
		reader.readAsText(file);
	};

	return (
		<div className="space-y-6">
			<div>
				<label htmlFor="wordcount-text" className="sr-only">
					Text to analyze
				</label>
				<textarea
					id="wordcount-text"
					ref={textRef}
					placeholder="Enter text here"
					rows={10}
					className="textarea resize-y w-full font-mono"
					onChange={(e) => setCount(countCharWordLine(e.target.value))}
					autoFocus
				/>
			</div>

			<div className="divider">OR</div>

			<div className="fieldset">
				<label htmlFor="wordcount-file" className="fieldset-legend pt-0">
					Pick a text file
				</label>
				<input
					id="wordcount-file"
					type="file"
					className="file-input w-full"
					onChange={handleFileChange}
				/>
			</div>

			<div>
				<h2 className="mt-0 mb-4">Output</h2>
				<output htmlFor="wordcount-text wordcount-file">
					<dl className="stats mt-0 shadow w-full">
						{[
							['Characters', count.character],
							['Words', count.word],
							['Lines', count.line],
						].map(([label, value], idx) => (
							<div className="stat" key={idx}>
								<dt className="stat-title mt-0">{label}</dt>
								<dd className="stat-value pl-0 mt-0">{value}</dd>
							</div>
						))}
					</dl>
				</output>
			</div>
		</div>
	);
}
