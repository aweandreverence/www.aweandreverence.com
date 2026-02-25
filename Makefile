## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

## install - install dependency packages
install:
	yarn install

## dev - starts the Next.js development server on port 3000
dev: install
	yarn run dev

## clean - clean previous builds
clean:
	rm -rf docs/*

## build - build the app for release
build: clean install
	yarn build
	cp CNAME docs/
	touch docs/.nojekyll

## deploy - build and deploy the app
deploy: build
	git add docs
	git commit -m "Deploy `git rev-parse --verify HEAD`"
	git push origin master

## update-nvmrc - updates .nvmrc
update-nvmrc:
	node -v > .nvmrc
	cat .nvmrc
