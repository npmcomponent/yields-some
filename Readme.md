*This repository is a mirror of the [component](http://component.io) module [yields/some](http://github.com/yields/some). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-some`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# some

  Array some utility.

## Installation

    $ component install yields/some

## API

### some(arr, fn)

```javascript
some([1, 'str', 3], function (el, i) {
  return 'string' == typeof el;
});
// > true
```

## License

  MIT
