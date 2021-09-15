import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const name = this.getName.value;
 const username = this.getUserName.value;
 const data = {
  id: new Date(),
  name,
  username,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_USER',
 data
 })
 this.getName.value = '';
 this.getUserName.value = '';
}
render() {
return (
<div className="container">
  <h1>Employee Listing</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input type="text" ref={(input) => this.getName = input}
   placeholder="Enter Name" /><br /><br />
   <textarea required rows="5" ref={(input) => this.getUserName = input}
   cols="28" placeholder="Enter Enterprise Id" /><br /><br />
   <button>Add Employee</button>
  </form>
</div>
);
}
}
export default connect()(UserForm);