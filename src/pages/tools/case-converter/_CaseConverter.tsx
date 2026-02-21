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

const cases = [
	{ name: 'camelCase', fn: (str: string) => camelCase(str) },
	{ name: 'Capital Case', fn: (str: string) => capitalCase(str) },
	{ name: 'CONSTANT_CASE', fn: (str: string) => constantCase(str) },
	{ name: 'dot.case', fn: (str: string) => dotCase(str) },
	{ name: 'kebab-case', fn: (str: string) => kebabCase(str) },
	{ name: 'no case', fn: (str: string) => noCase(str) },
	{ name: 'PascalCase', fn: (str: string) => pascalCase(str) },
	{ name: 'Pascal_Snake_Case', fn: (str: string) => pascalSnakeCase(str) },
	{ name: 'path/case', fn: (str: string) => pathCase(str) },
	{ name: 'Sentence case', fn: (str: string) => sentenceCase(str) },
	{ name: 'snake_case', fn: (str: string) => snakeCase(str) },
	{ name: 'Train-Case', fn: (str: string) => trainCase(str) },
];

interface OutputItem {
	name: string;
	caseLines: string[];
}

export function CaseConverter() {
	const [output, setOutput] = useState<OutputItem[]>(() =>
		cases.map(({ name }) => ({ name, caseLines: [''] }))
	);
	const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		const inputText = event.target.value.trim();
		const inputLines = inputText.split('\n');
		const newOutput = [];
		if (inputLines.length !== 0) {
			for (const { name, fn } of cases) {
				const caseLines = inputLines.map((line: string) => fn(line));
				newOutput.push({ name, caseLines });
			}
		}
		setOutput(newOutput);
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
					<h3 className="m-0">Output</h3>
					<ul className="mt-0">
						{output.map(({ name, caseLines }) => (
							<li key={name} className="space-x-2">
								<CopyButton getText={() => caseLines.join('\n')} />
								<strong className="font-mono">{name}</strong>
								<ul>
									{caseLines.map((line) => (
										<li key={line}>
											<span className="font-mono select-all break-all">{line}</span>
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
