import React, { Component } from 'react';
import { connect } from 'react-redux';
class User extends Component {
render() {
return (
<div className="App">
  <h2>{this.props.user.name}</h2>
  <p>{this.props.user.username}</p>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_USER', id: this.props.user.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_USER', id: this.props.user.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(User);