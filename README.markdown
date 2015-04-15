# fj-apply

[![Build Status](https://travis-ci.org/fp-js/fj-apply.svg)](https://travis-ci.org/fp-js/fj-apply) [![npm version](https://badge.fury.io/js/fj-apply.svg)](http://badge.fury.io/js/fj-apply)
> `apply` in functional style!


## Installation

`npm install fj-apply --save`

## Usage

```js
var apply = require('fj-apply');
apply(Math.min,[-1,1,2,42,0]); // -1
```

## API

```
(*... -> a) -> [*]-> a
```

* `fn` (madatory) function to applied.

* `arg` (madatory) arguments with which `fn` should be called.
