import React, { useState } from 'react';

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
	const [count, setCount] = useState<{
		character: number;
		word: number;
		line: number;
	}>({ character: 0, word: 0, line: 0 });
	const textRef = React.useRef<HTMLTextAreaElement>(null);

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
		<div className="flex flex-col gap-4">
			<textarea
				ref={textRef}
				placeholder="Enter text here"
				rows={10}
				className="px-2 py-2 resize-y"
				onChange={(e) => setCount(countCharWordLine(e.target.value))}
				autoFocus
			/>
			<div>or</div>
			<div>
				<input
					type="file"
					className="w-full p-2 border border-gray-400"
					onChange={handleFileChange}
				/>
			</div>
			<div>
				<h3>Output</h3>
				<pre className="overflow-x-auto">
					Character count: {count.character}
					<br />
					Word count: {'     '}
					{count.word}
					<br />
					Line count: {'     '}
					{count.line}
				</pre>
			</div>
		</div>
	);
}
