# My personal website

Source code for https://cshubh.com

## Built with

- [Astro](https://astro.build/)
- [tailwindcss](https://tailwindcss.com/)
- Patience and love ❤️

## Development

1. Install [just 1.46.0](https://github.com/casey/just/releases/tag/1.46.0)
2. Install dependencies
   ```bash
   pnpm install --frozen-lockfile
   ```
3. Create a feature branch
   ```bash
   git switch --create my-feature
   ```
4. Run development server
   ```bash
   just dev
   ```
5. Build to verify changes before deployment
   ```bash
   just build
   ```
6. Merge feature branch to master
   ```bash
   git switch master
   git pull origin master
   git merge my-feature
   ```
7. Push commits to remote master branch
   ```bash
   git push origin master
   ```
8. Deploy the website
   ```bash
   just deploy
   ```

## License

- The source code in this repository is licensed under the [AGPLv3](./LICENSE-AGPL-3.0-only).
- The text content, including documentation and blog posts, is licensed under the [CC BY-NC-SA 4.0](./LICENSE-CC-BY-NC-SA-4.0).

For more details, please refer to the respective license files.

<!--
website logo source:
evergreen tree: https://openmoji.org/library/emoji-1F332/
permalink: https://github.com/hfg-gmuend/openmoji/blob/f6c0046bb42195e025f4802e3ff5210389dd34a3/color/svg/1F332.svg

favicon generated using https://realfavicongenerator.net/
 -->
