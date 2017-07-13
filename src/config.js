'use strict';
var require = {
    paths: {
        "jquery": '../js/jquery',
        'entry': '../js/entry',
        'math': '../js/math',
        'demo': '../js/demo'
    }
};

if(typeof module === "object" && typeof module.exports === 'object'){
    module.exports = require;
}