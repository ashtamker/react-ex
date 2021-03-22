import React, { Component } from 'react'

export default class UserName extends Component {
    render() {
        return (
            <div>
                <p>{this.props.names}</p>
            </div>
        )
    }
}