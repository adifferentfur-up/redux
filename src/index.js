const person = {
  name: "John",
  address: {
    city: "San Francisco",
    country: "USA"
  }
};

const updated = {
  ...person,
  address : {
    ...person.address,
    city: "New York"
  },
  name: "Bob"
};

console.log (person);
console.log (updated);
