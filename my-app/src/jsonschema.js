const jsonSchema = {
  "type": "object",
  "properties": {
    "returnForm": {
      "title": "Return Form",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "warehouse": {
            "title": "Warehouse",
            "type": "string",
            "enum": [
              "ChocoFactory", "PowerfulSets", "MagicFruitz"
            ]
          },
          "returnList": {
            "title": "List of Items to be Returned",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "productItem": {
                  "type": "object",
                  "enum": [
                    { "value": 'SAP001', "label": 'Chocolate' },
                    { "value": 'SAP002', "label": 'Strawberry' },
                    { "value": 'SAP003', "label": 'Vanilla' }
                  ]
                },
                "productQuantity": {
                  "type": "number"
                }
              }
            }
          }
        }
      }
    }
  }
};

export default jsonSchema;