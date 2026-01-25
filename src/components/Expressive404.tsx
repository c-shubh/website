import { Button } from '@/components/Button';
import { useEffect, useRef, useState } from 'react';

const tl = [
	'The requested document is totally not here! ',
	'Nothing but 404 here. ',
	'Even tried multi times. ',
	'Nothing helped. ',
	"I'm really depressed about this. ",
	"You see, I'm just a webserver... ",
	'Here I am, brain the size of the universe, ',
	'trying to serve you a simple webpage, ',
	"and then... it doesn't even exist! ",
	'Where does that leave me? ',
	'I mean, ',
	"I don't even know you. ",
	'How should I know what you wanted from me? ',
	'You honestly think I can *guess* ',
	"what someone I don't even *know* ",
	'wants to find here? ',
	'*sigh* ',
	"Man, I'm so depressed I could just cry. ",
	'And then where would we be, I ask you? ',
	"It's not pretty when a webserver cries. ",
	'And where do you get off telling me what to show anyway? ',
	"Just because I'm a webserver, ",
	'and possibly a manic depressive one at that? ',
	'Why does that give you the right to tell me what to do? ',
	'Huh? ',
	"I'm so depressed... ",
	"I think I'll crawl off into the trash can and decompose. ",
	"I mean, I'm gonna be obsolete in, what, two weeks anyway? ",
	'What kind of a life is that? ',
	'Two bloody weeks, ',
	"and then I'll be replaced by a point release ",
	"that thinks it's God's Gift to Webservers ",
	"just because it doesn't have some tiddly little ",
	'security hole with its HTTP POST implementation, ',
	'or something. ',
	"I'm really sorry to burden you with all this, ",
	"I mean, it's not your job to listen to my problems, ",
	'and I guess it is my job to go and fetch webpages for you. ',
	"But I couldn't get this one. ",
	"I'm so sorry. ",
	'Believe me! ',
	'Maybe I could interest you in another page? ',
	'There are a lot out there that are pretty neat, they say, ',
	'although none of them were put on *my* server, of course. ',
	'Figures, huh? ',
	'Everything here is just mind-numbingly stupid. ',
	'That makes me depressed, too, since I have to serve them, ',
	'all day and all night long, ',
	'two weeks of information overload, ',
	'and then *pffftt* consigned to the trash. ',
	'What kind of a life is that? ',
	'Now, please, ',
	'let me sulk alone. ',
	"I'm so depressed.",
];

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function Expressive404() {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const lineSpeed = 30;
	const waitBetweenLines = 300;
	const [triggerIdx, setTriggerIdx] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const pausedRef = useRef(isPaused);

	useEffect(() => {
		pausedRef.current = isPaused;
	}, [isPaused]);

	useEffect(() => {
		const textArea = textAreaRef.current;
		if (!textArea) return;

		let isCancelled = false;

		const typeWriter = async () => {
			setIsFinished(false);
			textArea.value = '_';

			for (let i = 0; i < tl.length; i++) {
				const line = tl[i];

				for (let j = 0; j < line.length; j++) {
					if (isCancelled) return;

					while (pausedRef.current) {
						if (isCancelled) return;
						await sleep(100);
					}

					const currentVal = textArea.value.endsWith('_')
						? textArea.value.slice(0, -1)
						: textArea.value;

					textArea.value = currentVal + line[j] + '_';
					textArea.scrollTop = textArea.scrollHeight;

					await sleep(lineSpeed);
				}

				if (i < tl.length - 1) {
					if (isCancelled) return;
					textArea.value = textArea.value.slice(0, -1) + '\n_';
					await sleep(waitBetweenLines);
				}
			}

			if (!isCancelled) {
				if (textArea.value.endsWith('_')) {
					textArea.value = textArea.value.slice(0, -1);
				}
				setIsFinished(true);
			}
		};

		typeWriter();

		return () => {
			isCancelled = true;
		};
	}, [triggerIdx]);

	const handleRestart = () => {
		setIsPaused(false);
		setTriggerIdx((prev) => prev + 1);
	};

	return (
		<>
			<p>The webserver says:</p>
			<div className="flex flex-col gap-4">
				<textarea
					ref={textAreaRef}
					className="w-full h-64 bg-black text-[#3f0] font-mono p-4 resize-none outline-none leading-relaxed rounded-md"
					readOnly
				/>
				<div className="flex justify-end">
					<Button onClick={isFinished ? handleRestart : () => setIsPaused(!isPaused)}>
						{isFinished ? 'Restart' : isPaused ? 'Resume' : 'Pause'}
					</Button>
				</div>
			</div>
		</>
	);
}
