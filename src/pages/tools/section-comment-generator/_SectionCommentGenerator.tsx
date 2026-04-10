import { CopyButton } from '@/components/CopyButton';
import { useEffect, useState } from 'react';

const styles = {
	C: {
		start: '/*',
		end: '*/',
	},
	Python: {
		start: '#',
		end: '#',
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
	indentationSize: number,
) {
	if (!text) {
		text = 'Hey there!';
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
		<div>
			<input
				type="text"
				placeholder="Enter text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				autoFocus
			/>

			<div>
				<span>Style</span>
				<div>
					{Object.keys(styles).map((style) => (
						<label key={style}>
							<input
								type="radio"
								name="comment-style"
								value={style}
								checked={commentStyle.name === style}
								// @ts-ignore
								onChange={() => setCommentStyle({ name: style, style: styles[style] })}
							/>
							{style}
						</label>
					))}
				</div>
			</div>

			<div>
				<div>
					<label htmlFor="start-token">Start</label>
					<input
						type="text"
						id="start-token"
						value={commentStyle.style.start}
						disabled={commentStyle.name !== 'Custom'}
						onChange={(e) =>
							setCommentStyle((prev) => ({
								...prev,
								style: { ...prev.style, start: e.target.value },
							}))
						}
					/>
				</div>
				<div>
					<label htmlFor="end-token">End</label>
					<input
						type="text"
						id="end-token"
						value={commentStyle.style.end}
						disabled={commentStyle.name !== 'Custom'}
						onChange={(e) =>
							setCommentStyle((prev) => ({
								...prev,
								style: { ...prev.style, end: e.target.value },
							}))
						}
					/>
				</div>
			</div>

			<div>
				<div>
					<label htmlFor="line-length">Line Length</label>
					<input
						type="number"
						id="line-length"
						value={lineLength}
						onChange={(e) => {
							// @ts-expect-error: number input
							const value = e.target.value as number;
							setLineLength(Math.max(0, value).toString());
						}}
					/>
				</div>

				<div>
					<label htmlFor="indent-size">Indentation</label>
					<input
						type="number"
						id="indent-size"
						value={indentationSize}
						onChange={(e) => {
							// @ts-expect-error: number input
							const value = e.target.value as number;
							setIndentationSize(Math.max(0, value).toString());
						}}
					/>
				</div>
			</div>
			<div>
				<h3>Output</h3>
				<CopyButton getText={() => output} />
			</div>
			{output && <pre>{output}</pre>}
		</div>
	);
}
