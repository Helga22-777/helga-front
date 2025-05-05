# from-cwd

[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/WezomAgency/from-cwd/blob/master/LICENSE)
![types](https://img.shields.io/badge/types-TypeScript-blue)
[![npm](https://img.shields.io/badge/js--tiny-module-yellow.svg)](https://github.com/topics/js-tiny-module)
[![npm](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/from-cwd)
[![npm](https://img.shields.io/badge/wezom-agency-red.svg)](https://github.com/WezomAgency)

> Resolve path from CWD (Current Working Directory)

### Definition

`fromCWD(...paths: string[]): string`


### Usage

```js
const fromCWD = require('from-cwd');
// or
const { fromCWD } = require('from-cwd');

const resolvedPath1 = fromCWD('my-folder/my.file');
// or
const resolvedPath2 = fromCWD('my-folder/', 'my.file');
```

