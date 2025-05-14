// liquibase formatted mongodb

// changeset asmith:fruit labels:jira-1234 runWith:mongosh
// comment: add fruit collection
db.fruit.insertMany([
  {
    name: "Apple",
    color: "Red",
    price: 4.99,
    inStock: true
  },
  {
    name: "Grapes",
    color: "Green",
    price: 3.40,
    inStock: true
  }
]);
// rollback db.fruit.drop()