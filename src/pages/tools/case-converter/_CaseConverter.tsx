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
		<div>
			<textarea
				placeholder="Enter text here"
				rows={10}
				value={input}
				onChange={(e) => setInput(e.target.value)}
				autoFocus
			/>
			<div>
				{casesList.map((caseName) => (
					<label key={caseName}>
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
			<div>
				<h3>Output</h3>
				<CopyButton getText={() => output} />
			</div>
			<pre>{output}</pre>
		</div>
	);
}
