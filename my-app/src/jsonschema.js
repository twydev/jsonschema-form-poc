const jsonSchema = {
  "type": "object",
  "properties": {
    "returnForm": {
      "title": "Return Logistics Form",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "warehouse": {
            "title": "Destinating Warehouse",
            "type": "string",
            "enum": [
              "Warehouse Logistics Net Asia",
              "Yusen Logistics Singapore Pte Ltd", 
              "CWT Globelink Warehouse",
              "CoGri Asia Pacific Pte Ltd",
              "DAP Asia Pacific (S) Pte Ltd",
              "Atlas Ice Warehouse",
              "Guan Hua Warehouse Building",
              "iHub Solutions Pte Ltd"
            ]
          },
          "returnList": {
            "title": "Products to be Returned",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "productItem": {
                  "type": "object",
                  "enum": [
                    { "value": "8000001289", "label": "ALMOND WHITE CHOC" },
                    { "value": "8000001288", "label": "BERRY MOCHI MOCHI" },
                    { "value": "8000001287", "label": "BLACK FOREST - VEGAN+NUTS" },
                    { "value": "8000001286", "label": "CHOC FROSTED (GSL)" },
                    { "value": "8000001285", "label": "CHOCO MOCHIMOCHI" },
                    { "value": "8000001284", "label": "CHOCO-NUT SWIRL" },
                    { "value": "8000001283", "label": "CINNAMON - GSL" },
                    { "value": "8000001282", "label": "CINNAMON ROLL, 2019" },
                    { "value": "8000001281", "label": "MUNCHKIN, WHITE CHOCO W RAINBOW DRIZZLE" },
                    { "value": "8000001280", "label": "COOKIES & CREAM" },
                    { "value": "8000003301", "label": "MUNCHKIN, GLAZED W CHOCO RICE" },
                    { "value": "8000003302", "label": "MATCHA GREEN TEA" },
                    { "value": "8000003303", "label": "NUTTY CHOC - L34 - GSL" },
                    { "value": "8000003304", "label": "SALTED CARAMEL CHOC" },
                    { "value": "8000003305", "label": "STRAWBERRY FROSTED" },
                    { "value": "8000003306", "label": "SUGAR RAISED - L34 - ORANGE" },
                    { "value": "8000003307", "label": "WHITE CHOC - JUNIOR SALTY" },
                    { "value": "8000003308", "label": "CHOCO PEANUT CAKE" },
                    { "value": "8000003309", "label": "BOUBLE CHOC CAKE" }
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