import React from 'react';

export const HelloWorld = React.createClass({
  render: function() {
    return <p>Hello, {this.props.name}!</p>;
  }
});
export const HelloWorldState = React.createClass({
  getInitialState: function() {
    return {name: ''};
  },
  handleChange: function(event) {
    this.setState({name: event.target.value});
  },
  render: function() {
    return <div>
              <input type="text" onChange={this.handleChange} />
              <HelloWorld name={this.state.name} />
          </div>;
  }
});
