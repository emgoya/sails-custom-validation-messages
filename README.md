# Sails Custom Validation Messages

* Allows specific validation messages:
* Usage:
```javascript

// Model definition
// set desired validation messages in 'validationMessages', if no validation message is defined for a given field default will be used

module.exports = {
  attributes: {
    title: {
      type: "string",
      unique: true,
      required: true,
    }
    description: {
      type: "string",
      unique: true,
      minLength : 3
      maxLength: 200
    }
  },
  validationMessages: {
    name: {
      required: 'Title is required'
    },
    description: {
      maxLength : 'Description can not have more than 200 characters'
    },
  }
};

//Model Controller (create Action) 

var validator = require('sails-custom-validation-messages')

Model.create(newObject).exec(function (err, created){            
            if (!err) {
                res.send({'message' : 'ok', 'id' : created.id});
            }
            else {
                err = validator(Model, err);
                res.send(err);
            }
        });

