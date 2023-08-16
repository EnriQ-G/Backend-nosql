const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    admin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.export = mongoose.model('User', userSchema);