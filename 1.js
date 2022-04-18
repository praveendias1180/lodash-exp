const _ = require('lodash')

let users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Gill', lastName: 'Smith' }
]

_.forEach(users, function (user, index) {
    user.fullName = user.firstName + ' ' + user.lastName;
});

console.log(users)

const user = {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "brad",
      "last": "gibson"
    },
    "location": {
      "street": "9278 new road",
      "city": "kilcoole",
      "state": "waterford",
      "postcode": "93027",
      "coordinates": {
        "latitude": "20.9267",
        "longitude": "-7.9310"
      },
      "timezone": {
        "offset": "-3:30",
        "description": "Newfoundland"
      }
    }
};

console.log(_.get(user, 'location.timezone', {}));
console.log(_.get(user, 'name.last', ''));