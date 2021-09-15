import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newUserName = this.getUserName.value;
  const data = {
    newName,
    newUserName
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
}
render() {
return (
<div key={this.props.user.id}>
  <form className="form" onSubmit={this.handleEdit}>
    <input type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.user.name} placeholder="Enter Name" /><br /><br />
    <input type="text" ref={(input) => this.getUserName = input}
    defaultValue={this.props.user.username} placeholder="Enter Enterprise Id" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);