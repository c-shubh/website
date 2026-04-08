# default recipe to display help information
default:
    @just --list

build: clean check
    pnpm run astro build

check:
    pnpm run astro check

clean:
    pnpm exec rimraf .astro dist node_modules/.astro node_modules/.cache node_modules/.vite

deploy: build
    NODE_DEBUG=gh-pages node deploy.cjs
    @echo 'Check https://github.com/c-shubh/website/actions'

dev *ARGS:
    pnpm run astro dev {{ ARGS }}

preview: build
    pnpm run astro preview

blog:
    #!/usr/bin/env bash

    dt=$(date -I)
    id=$(head /dev/urandom | tr -dc a-z0-9 | head -c10)
    mkdir blog/$id
    cat >blog/$id/index.mdx <<EOF
    ---
    id: '${id}'
    date: '${dt}'
    title: '${id}'
    ---

    EOF
