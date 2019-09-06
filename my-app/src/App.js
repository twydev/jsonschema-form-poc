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
    return (
      <div className="row">
        <div className="col-sm-9"><CreatableSelect defaultValue={this.state.formData.productItem} options={this.options} onChange={this.handleProduct} /></div>
        <div className="col-sm-3" style={{paddingLeft: '0', paddingTop: '2px'}}>
    	    <div className="form-group">
    	      <input className="form-control" type='number' placeholder='Qty' value={this.state.formData.productQuantity || ''} onChange={this.handleQuantity} />
    	    </div>
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

  handleSubmit({ formData }) {
    console.log(formData);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h3>formData</h3>
            <p>This is the formData that the app will generate onSubmit</p>
            <pre>{JSON.stringify(this.state.formData, undefined, 2, 2)}</pre>
          </div>
          <div className="col-sm-7">
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
        </div>
      </div>
    );
  }
}

export default App;