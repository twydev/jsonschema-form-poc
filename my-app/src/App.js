import React, { Component } from 'react';
import { render } from "react-dom";
import Form from "react-jsonschema-form";

import jsonschema from "./jsonschema";
import uischema from "./uischema";

const formdata = {
}

function App() {
  return (
    <div style={{marginLeft:'25%', marginRight:'25%'}}>
      <Form schema={jsonschema}
         uiSchema={uischema}
         formData={formdata}/>
    </div>
  );
}

export default App;
