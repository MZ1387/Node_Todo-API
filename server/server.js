const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// let newTodo = new Todo({
//     text: 'XXX'
// });
//
// newTodo.save().then((doc) => {
//     console.log('doc', doc)
// }, (e) => {
//     console.log('Unable to save todo.')
// })

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

// let newUser = new User({
//     email: ''
// });
//
// newUser.save().then((doc) => {
//     console.log('doc', doc)
// }, (e) => {
//     console.log('Unable to save todo.', e)
// })