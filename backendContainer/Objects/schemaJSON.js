const animalsSchema = {
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "http://zooWebsite.com/schemas/animals.json",
	"title": "Animals",
	"description": "Schema for animals in the local zoo",
	"type": "array",
	"items": {
		"type": "object",
		"properties": {
			"name": {
					"type": "string"
			},
			"weight": {
					"type": "string"
			},
			"age": {
					"type": "number"
			}
		}
	}
};
console.log(animalsSchema);


/* So a schema is a nice way to translate some content the way i wanted it to be viewed for people who are not understanding what who or why its written the way i do it */