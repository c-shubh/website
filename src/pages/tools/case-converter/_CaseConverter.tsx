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
		<div className="flex flex-col gap-4">
			<textarea
				placeholder="Enter text here"
				rows={10}
				className="px-2 py-2 resize-y"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				autoFocus
			/>
			<div className="space-x-4 space-y-2">
				{casesList.map((caseName) => (
					<label key={caseName} className="inline-flex items-center gap-2 font-mono">
						<input
							type="radio"
							name="case-selection"
							value={caseName}
							checked={selectedCase === caseName}
							onChange={() => setCase(caseName)}
						/>
						{caseName}
					</label>
				))}
			</div>
			<div className="flex gap-2 mt-2">
				<h3 className="m-0">Output</h3>
				<CopyButton getText={() => output} />
			</div>
			<pre className="whitespace-pre-wrap break-all">{output}</pre>
		</div>
	);
}
