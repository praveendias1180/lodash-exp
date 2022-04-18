const _ = require('lodash')

let users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Gill', lastName: 'Smith' }
]

_.forEach(users, function (user, index) {
    user.fullName = user.firstName + ' ' + user.lastName;
});

console.log(users)