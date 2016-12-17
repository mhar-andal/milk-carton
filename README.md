![tumblr_inline_mldraud8jx1qz4rgp](https://cloud.githubusercontent.com/assets/1096881/21282631/c39f2c80-c3bc-11e6-8304-a99667222549.gif)

# Milk Carton
Gulp tasks for every project

## Install
```
$ npm install --save-dev milk-carton
```

## Usage
In order to use the gulp tasks, create a `gulpfile.js` with:

```javascript
require('milk-carton')();
```

or using `gulpfile.babel.js` with:
```javascript
import milk from 'milk-carton';
milk();
```

## Development
To build use:
```
$ babel -d dist/ src/git st
```