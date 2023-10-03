// dependencies
const { v4: uuid } = require("uuid");
const users = [
  {
    id: uuid(),
    name: "John",
    age: 34,
  },
  { id: uuid(), name: "doe", age: 30 },
];

module.exports = users;
