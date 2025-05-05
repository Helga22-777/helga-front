'use strict';

/**
 * @module
 * @author Oleg Dutchenko <dutchenko.o.dev@gmail.com>
 * @version 1.0.0
 */

// ----------------------------------------
// Imports
// ----------------------------------------

const path = require('path');

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * @type {string}
 * @private
 */
const _cwd = process.cwd();

// ----------------------------------------
// Public
// ----------------------------------------

/**
 * Resolve path from CWD (Current Working Directory)
 * @param {...string} paths
 * @returns {string}
 */
function fromCWD (...paths) {
	return path.join(_cwd, ...paths);
}

// ----------------------------------------
// Exports
// ----------------------------------------

module.exports = fromCWD;
module.exports.fromCWD = fromCWD;
