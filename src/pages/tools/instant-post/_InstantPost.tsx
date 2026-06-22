import { Link } from '@/components/Link';
import { useEffect, useState } from 'react';

const storageKey = 'tool-instant-post-input';

export function InstantPost() {
	const [text, setText] = useState(() => {
		const runningOnBrowser = typeof window !== 'undefined';
		if (runningOnBrowser) {
			const savedText = localStorage.getItem(storageKey);
			return savedText !== null ? savedText : '';
		}
		return '';
	});

	useEffect(() => {
		localStorage.setItem(storageKey, text);
	}, [text]);

	const encodedText = encodeURIComponent(text);

	return (
		<div className="space-y-6">
			<div>
				<div className="flex flex-col gap-1">
					<label htmlFor="tool-instant-post-input" className="sr-only">
						Draft your post
					</label>
					<textarea
						id="tool-instant-post-input"
						placeholder="Draft your post here..."
						rows={10}
						value={text}
						className="textarea resize-y w-full"
						onChange={(e) => setText(e.target.value)}
						autoFocus
					/>
					<div className="text-right text-xs font-mono pt-2 pr-1">
						{text.length} {text.length === 1 ? 'character' : 'characters'}
					</div>
				</div>
			</div>

			<div>
				<h2 className="mt-0 mb-0">Links</h2>
				<output htmlFor="tool-instant-post-input" className="block">
					{text.trim() === '' ? (
						<p className="italic">Start typing to generate links.</p>
					) : (
						<ul>
							<li>
								<Link href={`https://x.com/intent/post?text=${encodedText}`}>Share to X</Link>
							</li>
							<li>
								<Link href={`https://share.joinmastodon.org/#text=${encodedText}`}>
									Share to Mastodon
								</Link>
							</li>
							<li>
								<Link href={`https://bsky.app/intent/compose?text=${encodedText}`}>
									Share to Bluesky
								</Link>
							</li>
						</ul>
					)}
				</output>
			</div>
		</div>
	);
}
