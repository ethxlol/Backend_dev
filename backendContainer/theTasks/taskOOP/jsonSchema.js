// $schema - defines the standard in which the schema is written - link to the official JSON Schema website
// $id - unique URI, usually we want to provide here the name of the domain we control, the URL doesn't have to be working
// titles and description - annotation keywords, descriptive only, they are here to help human user understand the data
// type - validation, defines the first constraint on our JSON data

const jsonObj= {
  "checked": false,
  "dimensions": {
      "width": 5,
      "height": 10
  },
  "id": 1,
  "name": "A green door",
  "price": 12.5,
  "tags": [
      "home",
      "green"
  ]
}

