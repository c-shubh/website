import { Button } from '@/components/Button';
import { useState } from 'react';

export function BulkUrlOpener() {
	const [text, setText] = useState('');

	const openUrls = () => {
		const urls = text.split('\n');
		for (const url of urls) {
			if (!!url) window.open(url);
		}
	};

	return (
		<>
			<div>
				{
					// TODO: use uiwjs/react-codemirror for line numbers later
				}
				<textarea
					placeholder="Paste URLs"
					rows={10}
					value={text}
					onChange={(e) => setText(e.target.value)}
					autoFocus
				/>
				<p>
					Remember to <strong>allow popups</strong> from this site in your browser.
				</p>
				<Button onClick={openUrls}>Open all URLs</Button>
			</div>
		</>
	);
}
