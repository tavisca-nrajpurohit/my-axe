const CONFIGURE_AXE = require('jest-axe').configureAxe;
const TO_HAVE_NO_VIOLATION = require('jest-axe').toHaveNoViolations;

module.exports.toHaveNoViolations = TO_HAVE_NO_VIOLATION;
module.exports.configureAxe = CONFIGURE_AXE;