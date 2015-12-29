# sails-custom-validation-messages
## Create custom validation messages for Sails models

### usage

```javascript

/*
    /api/models/Model.js
    Set the desired validation messages in validationMessages, if a given field has no validation message 
    specified then default will be used.
*/

module.exports = {
  attributes: {
    title: {
      type: "string",
      required: true,
      minLength: 3,
      maxLength : 260
    }
  },
  validationMessages: {
    name: {
      required: 'Title is required'
      minLength : 'The title needs at least 3 characters'
    }
  }
};

/*
    /api/controllers/ModelController.js   
*/
...
var validator = require('sails-custom-validation-messages')
...
Model.create(newModel).exec(function (err, created){            
            if (!err) {
                
                res.send();
            }
            else {
                err = validator(Model, err);
                res.send(err);
            }
        });