function mergeProps(...args) {
  if (args.length === 1) {
    return args[0];
  }

  return Object.entries(args[1]).reduce((acc, [key, value]) => {
    return {
      ...args[0],
      ...acc,
      [key]: value,
    };
  }, {});
}

module.exports = mergeProps
