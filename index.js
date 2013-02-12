
/**
 * some
 */

var some = [].some;

/**
 * test whether some elements in
 * the array pass the test implemented
 * by `fn`.
 *
 * example:
 *
 *          some([1, 'foo', 'bar'], function (el, i) {
 *            return 'string' == typeof el;
 *          });
 *          // > true
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {bool}
 */

module.exports = function (arr, fn) {
  if (some) return some.call(arr, fn);
  for (var i = 0, l = arr.length; i < l; ++i) {
    if (fn(arr[i], i)) return true;
  }
  return false;
};
