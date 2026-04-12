import { CopyButton } from '@/components/CopyButton';
import { useEffect, useState, type ChangeEvent } from 'react';

const styles = {
	C: {
		start: '/*',
		end: '*/',
	},
	Python: {
		start: '#',
		end: '#',
	},
	SQL: {
		start: '--',
		end: '--',
	},
	Custom: {
		start: '',
		end: '',
	},
};

type CommentStyleName = keyof typeof styles;

interface CommentStyleWithName {
	name: CommentStyleName;
	style: (typeof styles)[CommentStyleName];
}

function generate(
	text: string,
	style: CommentStyleWithName,
	lineLength: number,
	indentationSize: number
) {
	if (!text) {
		return '';
	}

	const open = style.style.start;
	const gapAfterOpen = ' ';
	const gapBeforeText = ' ';
	const gapAfterText = ' ';
	const gapBeforeClose = ' ';
	const close = style.style.end;
	const repeatChar = '-';

	const leftBuilder = open + gapAfterOpen;
	const midBuilder = gapBeforeText + text + gapAfterText;
	const rightBuilder = gapBeforeClose + close;

	const unusedLength =
		lineLength - indentationSize - leftBuilder.length - midBuilder.length - rightBuilder.length;

	const getLeftPadding = (length: number, char: string): string =>
		length > 0 ? char.repeat(Math.floor(length / 2)) : '';

	const getRightPadding = (length: number, char: string): string =>
		length > 0 ? char.repeat(Math.ceil(length / 2)) : '';

	return (
		leftBuilder +
		getLeftPadding(unusedLength, repeatChar) +
		midBuilder +
		getRightPadding(unusedLength, repeatChar) +
		rightBuilder
	);
}

export function SectionCommentGenerator() {
	const [text, setText] = useState('');
	const [output, setOutput] = useState('');
	const [lineLength, setLineLength] = useState('80');
	const [indentationSize, setIndentationSize] = useState('0');
	const [commentStyle, setCommentStyle] = useState<CommentStyleWithName>({
		name: 'C',
		style: styles.C,
	});

	const refreshOutput = () => {
		setOutput(generate(text, commentStyle, parseInt(lineLength), parseInt(indentationSize)));
	};

	useEffect(refreshOutput, [text, lineLength, indentationSize, commentStyle]);

	return (
		<div className="flex flex-col gap-6">
			<div>
				<label htmlFor="comment-text" className="sr-only">
					Comment Text
				</label>
				<input
					id="comment-text"
					type="text"
					className="input w-full"
					placeholder="Enter text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					autoFocus
				/>
			</div>

			<fieldset className="flex flex-col gap-4">
				<legend className="font-medium">Style</legend>
				<div className="flex flex-wrap gap-4 items-center h-full">
					{Object.keys(styles).map((style) => (
						<label key={style} className="inline-flex items-center gap-2">
							<input
								type="radio"
								name="comment-style"
								value={style}
								checked={commentStyle.name === style}
								className="radio"
								// @ts-ignore
								onChange={() => setCommentStyle({ name: style, style: styles[style] })}
							/>
							{style}
						</label>
					))}
				</div>
			</fieldset>

			{[
				[
					{
						id: 'start-token',
						type: 'text',
						label: 'Start',
						value: commentStyle.style.start,
						disabled: commentStyle.name !== 'Custom',
						fn: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
							setCommentStyle((prev) => ({
								...prev,
								style: { ...prev.style, start: e.target.value },
							})),
					},
					{
						id: 'end-token',
						type: 'text',
						label: 'End',
						disabled: commentStyle.name !== 'Custom',
						value: commentStyle.style.end,
						fn: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
							setCommentStyle((prev) => ({
								...prev,
								style: { ...prev.style, end: e.target.value },
							})),
					},
				],
				[
					{
						id: 'line-length',
						type: 'number',
						label: 'Line Length',
						disabled: false,
						value: lineLength,
						fn: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
							// @ts-expect-error: number input
							const value = e.target.value as number;
							setLineLength(Math.max(0, value).toString());
						},
					},
					{
						id: 'indent-size',
						type: 'number',
						label: 'Indentation',
						disabled: false,
						value: indentationSize,
						fn: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
							// @ts-expect-error: number input
							const value = e.target.value as number;
							setIndentationSize(Math.max(0, value).toString());
						},
					},
				],
			].map((row, idx) => (
				<div className="flex gap-4" key={idx}>
					{row.map(({ id, label, type, value, disabled, fn }, idx) => (
						<div className="flex-1 flex flex-col gap-1" key={idx}>
							<label htmlFor={id} className="font-medium">
								{label}
							</label>
							<input
								type={type}
								id={id}
								className="w-full input"
								value={value}
								disabled={disabled}
								onChange={fn}
							/>
						</div>
					))}
				</div>
			))}

			<div className="flex items-center gap-2">
				<h2 className="mt-0 mb-0">Output</h2>
				<CopyButton getText={() => output} />
			</div>

			{output && (
				<output htmlFor="comment-text line-length indent-size start-token end-token">
					<pre className="w-full mt-0 mb-0 overflow-x-auto select-all">{output}</pre>
				</output>
			)}
		</div>
	);
}
