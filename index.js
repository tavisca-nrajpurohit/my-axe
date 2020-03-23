const CONFIGURE_AXE = require('jest-axe').configureAxe;
const TO_HAVE_NO_VIOLATION = require('jest-axe').toHaveNoViolations;
const FS = require('fs');
const DEFAULT_AXE_CONFIG = require('./axe.config');

let axeConfigurations;

if(FS.existsSync('./../../axe.config.json')){
    const RAW_AXE_CONFIGURATIONS = FS.readFileSync('./../../axe.config.json');
    axeConfigurations = JSON.parse(RAW_AXE_CONFIGURATIONS);
    console.log("Using User-deined AXE CONFIGURATIONS.");
}else{
    axeConfigurations = DEFAULT_AXE_CONFIG;
    console.log("Using Default AXE CONFIGURATIONS.");
}

const AXE = CONFIGURE_AXE(axeConfigurations);

module.exports.axe = AXE;
module.exports.toHaveNoViolations = TO_HAVE_NO_VIOLATION;
module.exports.configureAxe = CONFIGURE_AXE;