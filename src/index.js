"use strict";
/**
 * [[Description]]
 * @param   {object}   Model A waterline model object
 * @param   {object}   err validation error object
 * @returns {[[Type]]} returns the err object replacing the validation messages if they exists in Model.validationMessages
 */
var validate = function(Model, err) {
    if (typeof Model != 'undefined' && typeof Model.validationMessages != 'undefined' && typeof err.invalidAttributes != 'undefined' ) {
        _.each(Object.keys(err.invalidAttributes), function (field) {
            _.each(err.invalidAttributes[field], function(rule, loop) {                
                if (typeof Model.validationMessages[field] != 'undefined' && typeof Model.validationMessages[field][rule.rule] != 'undefined') {
                    err.invalidAttributes[field][loop].message = Model.validationMessages[field][rule.rule];
                }
            });
        } );
    }
    return err;
};

module.exports = validate;