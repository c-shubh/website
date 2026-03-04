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

dev:
    pnpm run astro dev

preview: build
    pnpm run astro preview
