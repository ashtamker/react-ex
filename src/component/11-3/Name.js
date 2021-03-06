import React from 'react';

 class Name extends React.Component {
    firstName = ''
    lastName = ''

    handleChange = (e) => {
        this.setFirstName(this.firstName = e.target.value)


    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }
    render() {
        return (
            <form onChange={this.handleChange}>
                {<label>First Name:</label>}
                <input type='text' value={this.firstName}></input>
                {<label>Last Name:</label>}
                <input type='text' value={this.lastName}></input>
            </form>
        )
    }
}
export default Name;