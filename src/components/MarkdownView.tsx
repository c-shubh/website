import { getLinkAttributes } from '@/utils';
import { marked, type Tokens } from 'marked';

marked.use({
	renderer: {
		link(token: Tokens.Link) {
			const { href, target, rel } = getLinkAttributes(token.href);
			const targetAttr = target ? ` target="${target}"` : '';
			const relAttr = rel ? ` rel="${rel}"` : '';

			return `<a href="${href}"${targetAttr}${relAttr} class="link">${token.text}</a>`;
		},
	},
});

interface Props {
	source: string;
}

export function MarkdownView({ source }: Props) {
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: marked.parse(source),
			}}
		/>
	);
}
