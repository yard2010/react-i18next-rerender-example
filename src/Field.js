import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';


class Field extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    Object.entries(this.props).forEach(([key, val]) =>
      prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    );

    console.log('Field props after the change:', this.props)
  }

  render() {
    console.log('Field Rerender');
    return (
        <input type="text" onChange={this.props.onChange} />
    );
  }
}


export default withNamespaces()(Field);
