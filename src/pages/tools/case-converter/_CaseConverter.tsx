import { CopyButton } from '@/components/CopyButton';
import {
	camelCase,
	capitalCase,
	constantCase,
	dotCase,
	kebabCase,
	noCase,
	pascalCase,
	pascalSnakeCase,
	pathCase,
	sentenceCase,
	snakeCase,
	trainCase,
} from 'change-case';
import { useState } from 'react';

const cases = {
	camelCase: (str: string) => camelCase(str),
	'Capital Case': (str: string) => capitalCase(str),
	CONSTANT_CASE: (str: string) => constantCase(str),
	'dot.case': (str: string) => dotCase(str),
	'kebab-case': (str: string) => kebabCase(str),
	'no case': (str: string) => noCase(str),
	Pascal_Snake_Case: (str: string) => pascalSnakeCase(str),
	PascalCase: (str: string) => pascalCase(str),
	'path/case': (str: string) => pathCase(str),
	'Sentence case': (str: string) => sentenceCase(str),
	snake_case: (str: string) => snakeCase(str),
	'Train-Case': (str: string) => trainCase(str),
};

const casesList = Object.keys(cases) as (keyof typeof cases)[];
casesList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

export function CaseConverter() {
	const [selectedCase, setCase] = useState<keyof typeof cases>('camelCase');
	const [input, setInput] = useState('');

	const output = input
		.split('\n')
		.map((line: string) => cases[selectedCase](line))
		.join('\n');

	return (
		<div className="space-y-4">
			<div>
				<label htmlFor="tool-case-converter-input" className="sr-only">
					Text to convert
				</label>
				<textarea
					id="tool-case-converter-input"
					placeholder="Enter text here"
					rows={10}
					className="textarea resize-y w-full"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					autoFocus
				/>
			</div>
			<fieldset className="space-x-4">
				<legend className="sr-only">Select target case formatting</legend>
				{casesList.map((caseName) => (
					<label key={caseName} className="inline-flex items-center gap-2 font-mono">
						<input
							type="radio"
							name="case-selection"
							value={caseName}
							checked={selectedCase === caseName}
							onChange={() => setCase(caseName)}
							className="radio"
						/>
						{caseName}
					</label>
				))}
			</fieldset>
			<div className="flex items-center gap-2">
				<h2 className="mt-0 mb-0">Output</h2>
				<CopyButton getText={() => output} />
			</div>
			{output && (
				<output htmlFor="tool-case-converter-input">
					<pre>{output}</pre>
				</output>
			)}
		</div>
	);
}
