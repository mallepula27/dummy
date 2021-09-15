import React, { Component } from 'react';
import UserForm from './UserForm';
import AllUsers from './AllUsers';


class App extends Component {
render() {
return (
<div className="App">
    <h2 className="center ">Add Employee</h2>
    <UserForm />
    <AllUsers />
</div>
);
}
}
export default App;
