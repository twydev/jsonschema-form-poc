import React, { Component } from 'react';
import { render } from "react-dom";
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
    this.options = props.schema.properties.itemName.enum;
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
  	const stateQuantity = this.state.formData.quantity;
  	this.setState({ formData: { itemName: event, quantity: stateQuantity } }, () => this.props.onChange(this.state.formData))
  	// this.setState({ formData: Object.assign({}, formData) })
  }

  handleQuantity(event) {
  	const stateName = this.state.formData.itemName;
  	this.setState({ formData: { itemName: stateName, quantity: parseInt(event.target.value) } }, () => this.props.onChange(this.state.formData))
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
    	<div>
	      <CreatableSelect defaultValue={this.state.formData.itemName} options={this.options} onChange={this.handleProduct}/>	
	      <input type='number' placeholder='returned amount' value={this.state.formData.quantity || ''} onChange={this.handleQuantity}/>
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
    	formContext: {},
      	formData: { 
      		metaData: {
      			created: new Date().toISOString()
      		},
      		"returnList": [
      			{
      				"itemName": {
      					"value": '',
      					"label": ''
      				},
      				"quantity": null
      			}
      		]
      	}
    };
    this.fields = {selectProduct: ReturnArray};
  };
  
  handleChange({formData}) {
  	this.setState({ formData: Object.assign({}, formData) });
  }
  
  handleSubmit(data) {
  	// not important
  }
  
  render() {
  	return (
    	<div style={{ marginLeft: '25%', marginRight: '25%'}}>
        <h3>FormState:</h3>
        <pre>{ JSON.stringify(this.state.formData,undefined,2,2) }</pre>
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
    );
  }
}


export default App;
