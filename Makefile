TAP   = ./node_modules/.bin/tap

install:
	@npm i --registry=https://registry.npm.taobao.org

unit:
	@$(TAP) -j4 test.js

cov:
	@$(TAP) -j4 test.js --cov

.PHONY: install