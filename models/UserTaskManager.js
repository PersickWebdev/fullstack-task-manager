const { Schema, model } = require('mongoose');

const schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: [
        {
            title: {
                type: String
            },
            priority: {
                type: String
            },
            isCompleted: {
                type: Boolean
            }
        }
    ]
});

module.exports = model('UserTaskManager', schema);