BUILD_DIR = docs

## help - Display help about make targets for this Makefile
help:
	@cat Makefile | grep '^## ' --color=never | cut -c4- | sed -e "`printf 's/ - /\t- /;'`" | column -s "`printf '\t'`" -t

## install - install dependency packages
install:
	npm install

## dev - starts the Next.js development server on port 3000
dev: install
	npm run dev

## run - alias for dev
run: dev

## clean - clean previous builds
clean:
	rm -rf $(BUILD_DIR)/*

## build - build the app for release
build: clean install
	npm run build
	cp CNAME $(BUILD_DIR)/
	touch $(BUILD_DIR)/.nojekyll

## deploy - build docs for deployment; GitHub Actions publishes after merge
deploy: build
	@echo "$(BUILD_DIR)/ is ready. Commit the docs changes in a PR; GitHub Actions deploys after merge to master."

## format - format code with prettier
format:
	npm run format

## format-check - check code formatting
format-check:
	npm run format:check

## update-nvmrc - updates .nvmrc
update-nvmrc:
	node -v > .nvmrc
	cat .nvmrc
