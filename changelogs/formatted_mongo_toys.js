// liquibase formatted mongodb

// changeset asmith:toys labels:jira-5678 runWith:mongosh
// comment: add toys collection
db.toys.insertMany([
  {
    name: "Teddy Bear",
    type: "Plush",
    price: 19.99,
    inStock: true
  },
  {
    name: "Lego Set",
    type: "Building",
    price: 29.99,
    inStock: true
  }
]);
// rollback db.toys.drop()