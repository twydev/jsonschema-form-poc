import React from 'react';
import CreatableSelect from 'react-select/creatable';
import Form from "react-jsonschema-form";

import jsonSchema from "./jsonschema";
import uiSchema from "./uischema";

const ReturnArray = class ReturnArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: props.formData
    };
    this.options = props.schema.properties.productItem.enum;
    this.handleProduct = this.handleProduct.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    console.log('Props', props);
  }

  // onChange(key) {
  //   return (event) => {
  //     this.setState({
  //       [key]: event.target.value
  //     }, () => this.props.onChange(this.state));
  //   };
  // }

  handleProduct(event) {
    const stateQuantity = this.state.formData.productQuantity;
    const value = event.__isNew__ ? '000' : event.value;
    this.setState({ formData: { productItem: { value, label: event.label }, productQuantity: stateQuantity } }, () => this.props.onChange(this.state.formData))
  }

  handleQuantity(event) {
    const stateItem = this.state.formData.productItem;
    this.setState({ formData: { productItem: stateItem, productQuantity: parseInt(event.target.value) } }, () => this.props.onChange(this.state.formData))
  }

  render() {
    // return (
    // 	<div>
    //    <h3>formData:</h3>
    //    <pre>{ JSON.stringify(this.state.formData,undefined,2,2) }</pre>
    //    <Select defaultValue={this.state.formData} options={this.options} onChange={this.handleChange}/>	
    // 	</div>
    // );
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3"><CreatableSelect defaultValue={this.state.formData.productItem} options={this.options} onChange={this.handleProduct} /></div>
          <div class="col-md-1"><input type='number' placeholder='Quantity' value={this.state.formData.productQuantity || ''} onChange={this.handleQuantity} /></div>
          <div class="col-md-1"></div>
        </div>
      </div>
    );
  }
}

const App = class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      "formContext": {},
      "formData": {
        "metaData": {
          "created": new Date().toISOString()
        },
        "returnForm": [
          {
            "warehouse": '',
            "returnList": [
              {
                "productItem": {
                  "value": '',
                  "label": ''
                },
                "productQuantity": null
              }
            ]
          }
        ]
      }
    };
    this.fields = { selectProduct: ReturnArray };
  };

  handleChange({ formData }) {
    this.setState({ formData: Object.assign({}, formData) });
  }

  handleSubmit(data) {
    // not important
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <h3>FormState:</h3>
            <pre>{JSON.stringify(this.state.formData, undefined, 2, 2)}</pre>
            <Form
              safeRenderCompletion={true}
              formData={this.state.formData}
              formContext={this.state.formContext}
              schema={jsonSchema}
              uiSchema={uiSchema}
              fields={this.fields}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    );
  }
}


export default App;
