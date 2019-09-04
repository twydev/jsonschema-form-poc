const jsonschema = {
    "definitions": {
      "Thing": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "default": "Default name"
          }
        }
      }
    },
    "type": "object",
    "properties": {
      "unorderable": {
        "title": "Unorderable items",
        "type": "array",
        "items": {
          "type": "object",
          "anyOf": [
            {
              "title":"chococake",
              "properties": {
                "chococake": {
                  "type": "number"
                }
              }
            },
            {
              "title":"vanilladonut",
              "properties": {
                "vanilladonut": {
                  "type": "number"
                }
              }
            }
          ]
        }
      }
    }
  };

export default jsonschema;