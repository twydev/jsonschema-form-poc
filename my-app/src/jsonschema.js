const jsonSchema = {
    "definitions": {
    },
    "type": "object",
    "properties": {
      "warehouse": {
        "type": "string",
        "enum": [
          "ChocoFactory", "LuzonHouse", "MagicFruitz"
        ]
      },
      "returnList": {
        "title": "List of Items to be Returned",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "itemName": {
              "type": "object",
              "enum": [
                { value: 'SAP001', label: 'Chocolate' },
                { value: 'SAP002', label: 'Strawberry' },
                { value: 'SAP003', label: 'Vanilla' }
              ]
            },
            "quantity": {
              "type": "number"
            }
          }
        }
      }
    }
  };

// const jsonSchema = {
//     "type": "object",
//     "properties": {
//       "name": { "type": "string" },
//       "quantity": { "type": "number" }
//     }
// }

// { value: 'WH01', label: 'ChocoFactory' },
// { value: 'WH02', label: 'LuzonHouse' },
// { value: 'WH03', label: 'MagicFruitz' }

export default jsonSchema;