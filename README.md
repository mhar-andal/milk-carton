![tumblr_inline_mldraud8jx1qz4rgp](https://cloud.githubusercontent.com/assets/1096881/21282631/c39f2c80-c3bc-11e6-8304-a99667222549.gif)

# Milk Carton
A task runner to create, develop, test, and deploy code

## Installation

To install for use in your project:

```sh
$ npm install -g milk-carton
```

## Usage

Use these commands in the root of your project

```sh
# To view all tasks:
$ milk --help

# To build (alias: b)
$ milk build

# Run a local server for testing (alias: s)
$ milk server
```

### Configuration

You can optionally include a `milk.json` file in the root of your project to over-ride any of milks [default settings](src/config.js). Ensure your `milk.json` file is [valid JSON](https://jsonlint.com/).

see [src/config.js](src/config.js) for all available options.

## Development
To contribute to milk-carton fork this repository and create a pull request with details regarding your proposed changes.
Requirements: [yarn](https://yarnpkg.com/en/)

```sh
# Install yarn packages
$ yarn install

# To build in development
$ yarn run build --watch

# To build for release
$ yarn run build
```

## Contributors
This project is build by and for [Americademy, Inc](https://www.americademy.com/) for use in all products developed for [Codeverse](https://www.codeverse.com/)

* Americademy - [@americademy](https://github.com/americademy)
* Dave Arel - [@davearel](https://github.com/davearel)

## License

```
 *  The MIT License
 *
 *  Copyright (c) 2016-2018 Americademy, Inc. https://www.americademy.com
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
```
