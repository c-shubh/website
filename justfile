# default recipe to display help information
default:
    @just --list

build: clean check
    pnpm run astro build

check:
    pnpm run astro check

clean:
    pnpm exec rimraf .astro dist

deploy: build
    NODE_DEBUG=gh-pages node deploy.cjs
    @echo 'Check https://github.com/c-shubh/website/actions'

dev *ARGS:
    pnpm run astro dev {{ ARGS }}

preview: build
    pnpm run astro preview
