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
	indentationSize: number
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
	const [copied, setCopied] = useState(false);

	const refreshOutput = () => {
		setOutput(generate(text, commentStyle, parseInt(lineLength), parseInt(indentationSize)));
	};

	useEffect(refreshOutput, [text, lineLength, indentationSize, commentStyle]);

	return (
		<div className="flex flex-col gap-4">
			<input
				type="text"
				className="w-full p-2"
				placeholder="Enter text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				autoFocus
			/>

			<div className="flex flex-col gap-4">
				<span className="font-medium">Style</span>
				<div className="flex flex-wrap gap-4 items-center h-full">
					{Object.keys(styles).map((style) => (
						<label key={style} className="inline-flex items-center gap-2 cursor-pointer">
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

			<div className="flex gap-4">
				<div className="flex-1 flex flex-col gap-1">
					<label htmlFor="start-token" className="font-medium">
						Start
					</label>
					<input
						type="text"
						id="start-token"
						className="w-full p-2"
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
				<div className="flex-1 flex flex-col gap-1">
					<label htmlFor="end-token" className="font-medium">
						End
					</label>
					<input
						type="text"
						id="end-token"
						className="w-full p-2"
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

			<div className="flex gap-4">
				<div className="flex-1 flex flex-col gap-1">
					<label htmlFor="line-length" className="font-medium">
						Line Length
					</label>
					<input
						type="number"
						id="line-length"
						className="w-full p-2"
						value={lineLength}
						onChange={(e) => {
							// @ts-expect-error: number input
							const value = e.target.value as number;
							setLineLength(Math.max(0, value).toString());
						}}
					/>
				</div>

				<div className="flex-1 flex flex-col gap-1">
					<label htmlFor="indent-size" className="font-medium">
						Indentation
					</label>
					<input
						type="number"
						id="indent-size"
						className="w-full p-2"
						value={indentationSize}
						onChange={(e) => {
							// @ts-expect-error: number input
							const value = e.target.value as number;
							setIndentationSize(Math.max(0, value).toString());
						}}
					/>
				</div>
			</div>
			<div className="flex gap-2 mt-2">
				<h3 className="m-0">Output</h3>
				<CopyButton getText={() => output} />
			</div>
			{output && <pre className="w-full overflow-x-auto select-all">{output}</pre>}
		</div>
	);
}
