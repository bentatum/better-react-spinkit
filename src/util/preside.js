export default (propValue, contextValue, defaultValue) =>
  propValue && propValue !== defaultValue ? propValue : (contextValue || defaultValue)
