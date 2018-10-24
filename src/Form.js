import React, { Component } from 'react';
import Field from './Field';
import { Jumbotron } from 'reactstrap';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (id, value) => {
    console.log('Form Change');
    this.setState({date: new Date()});
  }

  render() {
    console.log('Form Rerender', this.state);
    return (
      <Jumbotron>
        <h1 className="display-3">react-i18next Rerenders</h1>
        <p className="lead">This is a demonstration of react-i18next unnecessary rerenders. When you change the field, it calls a method on the parent Form, which in turn change the Form state and forcing a rerender. Every field (which is a pure component) will be rerendered, even though no change in props occured.</p>

          <Field onChange={this.handleChange} key={1} />
          <Field onChange={this.handleChange} key={2} />
          <Field onChange={this.handleChange} key={3} />
          <Field onChange={this.handleChange} key={4} />
          <Field onChange={this.handleChange} key={5} />

        <p className="hint">Press F12 to open the console and see the undocumented HOC prop i18nOptions.</p>

      </Jumbotron>
    );
  }
}


export default Form;
