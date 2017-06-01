# npm-module-es6-boilerplate
Boilerplate to write npm modules in ES6 and distribute vanilla ES5 code. This package will work seamlessly on any platform that supports ES5.

[![Build Status](https://travis-ci.org/ygnr/npm-module-es6-boilerplate.svg?branch=master)](https://travis-ci.org/ygnr/npm-module-es6-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/ygnr/npm-module-es6-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/ygnr/npm-module-es6-boilerplate?branch=master)

## Included

- [babel](http://babeljs.io) - Transpile ES6
- [Jest](https://facebook.github.io/jest/) - Tests made easy and includes coverage report
- [Coveralls](https://coveralls.io/) - Ensure that all your new code is fully covered, and see coverage trends emerge.
- [Travis](https://travis-ci.org) - Deploy with Confidence.
- Auto publish to npm on every build.

## Getting started

```
git clone git@github.com:ygnr/npm-module-es6-boilerplate.git

cd npm-module-es6-boilerplate   # Change current directory to the newly created one
yarn install                    # Install dependencies
```

## Testing

This boilerplate uses [Facebook Jest](https://facebook.github.io/jest/). Add a
directory named `__tests__` at any level and start writing tests.

```
yarn test
```