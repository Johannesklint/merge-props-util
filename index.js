function isObject(value) {
  return (
    typeof value !== "object" &&
    !(value instanceof Object) &&
    !(value instanceof Array)
  );
}

function mergeProps(...args) {
  return Object.values(args).reduce((acc, value) => {
    if (isObject(value)) {
      throw new Error("Pass in an object");
    }
    return {
      ...acc,
      ...value,
    };
  }, {});
}

module.exports = mergeProps;
