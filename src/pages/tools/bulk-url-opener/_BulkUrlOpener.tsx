import { useState } from 'react';

export function BulkUrlOpener() {
	const [text, setText] = useState('');
	const [errors, setErrors] = useState<string[]>([]);

	const openUrls = () => {
		setErrors([]);

		const urls = text.split('\n');
		const currentErrors: string[] = [];

		for (let url of urls) {
			url = url.trim();
			if (!url) continue;

			let finalUrl: string;

			try {
				finalUrl = new URL(url).href;
			} catch (e: any) {
				console.error(e);
				try {
					finalUrl = new URL(`http://${url}`).href;
				} catch (err: any) {
					console.error(err);
					currentErrors.push(`Invalid format for "${url}": ${e.message}`);
					continue;
				}
			}

			try {
				window.open(finalUrl, '_blank');
			} catch (e: any) {
				console.error(e);
				currentErrors.push(`Failed to open "${url}": ${e.message}`);
			}
		}

		if (currentErrors.length > 0) {
			setErrors(currentErrors);
		}
	};

	return (
		<div className="space-y-4">
			<div>
				<label htmlFor="tool-bulk-url-opener-input" className="sr-only">
					List of URLs to open
				</label>
				<textarea
					placeholder="Paste URLs"
					id="tool-bulk-url-opener-input"
					rows={10}
					value={text}
					onChange={(e) => setText(e.target.value)}
					className="textarea w-full resize-y"
					autoFocus
				/>
			</div>
			<p>
				Remember to <strong>allow popups</strong> from this site in your browser.
			</p>
			<button type="button" onClick={openUrls} className="btn btn-neutral">
				Open all URLs
			</button>
			<div className="space-y-4">
				{errors.map((error, idx) => (
					<div role="alert" className="alert alert-error" key={idx}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 shrink-0 stroke-current"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>{error}</span>
					</div>
				))}
			</div>
		</div>
	);
}
