function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isString(value) {
  return typeof value === "string";
}
function isFunction(value) {
  return typeof value === "function";
}
function isRegExp(value) {
  return value instanceof RegExp;
}
export {
  isNull as a,
  isFunction as b,
  isString as c,
  isRegExp as d,
  isUndefined as i
};
