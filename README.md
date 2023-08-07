# Scroll Target Trigger

Lightweight, dependency free, scroll event methods.

## Methods

The following methods are supported by this package:

| Method    | Description                                                       |
|-----------|-------------------------------------------------------------------|
| `target`  | Scroll to an `Element` or `document` position _when executed_.    |
| `trigger` | Run callback _when scrolled_ to `Element` or `document` position. |

## Dependencies

- [Node.js](https://nodejs.org)

## Usage

There are two ways you can use this package.  One is by including the JavaScript source directly.  The other is by importing the module into your component.

### Script include

After you [build the distribution sources](#cli-options) the set-up is fairly simple..

```html
<script type="text/javascript" src="path/to/scroll-target-trigger.min.js"></script>

<script type="text/javascript">
  scrollTargetTrigger(element | position, callback).trigger();
</script>
```

### Module import

If your using a modern framework like [Aurelia](https://aurelia.io), [Angular](https://angular.io), [React](https://reactjs.org), or [Vue](https://vuejs.org)

```javascript
import ScrollTargetTrigger from 'scroll-target-trigger';

const scroll = new ScrollTargetTrigger(element | position, callback);
scroll.trigger();
```

## Developers

### CLI options

Run [ESLint](https://eslint.org) on project sources:

    $ npm run lint

Transpile ES6 sources (using [Babel](https://babeljs.io)) and minify to a distribution:

    $ npm run build

## Contributions

If you fix a bug, or have a code you want to contribute, please send a pull-request with your changes. (Note: Before committing your code please ensure that you are following the [Node.js style guide](https://github.com/felixge/node-style-guide))

## Versioning

This package is maintained under the [Semantic Versioning](https://semver.org) guidelines.

## License and Warranty

This package is distributed in the hope that it will be useful, but without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

_scroll-target-trigger_ is provided under the terms of the [MIT license](http://www.opensource.org/licenses/mit-license.php)

## Author

[Marc S. Brooks](https://github.com/nuxy)
