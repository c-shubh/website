import { FormattedDate } from '@/components/FormattedDate';
import { Link } from '@/components/Link';
import { MarkdownView } from '@/components/MarkdownView';
import { type GramImage } from '@/utils';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			// tailwind's default values: https://tailwindcss.com/docs/responsive-design
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
		},
	},
});

interface GramProps {
	images: GramImage[];
}

export function Gram({ images }: GramProps) {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ width: '100%' }} className="not-prose">
				<Masonry
					columns={{
						xs: 2,
						sm: 3,
					}}
					spacing={1}
				>
					{images.map((image) => (
						<div className="card shadow-sm bg-base-100" key={image.id}>
							<figure>
								<Link href={`/gram/${image.id}`} className='w-full'>
									<img
										loading="lazy"
										src={image.thumbnailSrc}
										alt={image.plaintextCaption}
										className="w-full"
										width={image.thumbnailWidth}
										height={image.thumbnailHeight}
									/>
								</Link>
							</figure>
							<div className="card-body p-3">
								{image.caption && <MarkdownView source={image.caption} />}
								<FormattedDate date={new Date(image.dateTaken)} />
							</div>
						</div>
					))}
				</Masonry>
			</Box>{' '}
		</ThemeProvider>
	);
}
