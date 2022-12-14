'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectWithStyles = {};

  sourceString.split(';')
    .map(x => x.trim())
    .filter(style => style.length > 1)
    .map(x => x.split(':'))
    .forEach(([key, value]) => {
      objectWithStyles[key.trim()] = value.trim();
    });

  return objectWithStyles;
}

module.exports = convertToObject;
