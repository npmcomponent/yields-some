
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
