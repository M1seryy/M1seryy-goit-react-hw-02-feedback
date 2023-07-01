import React, { Component } from 'react';

class Notification extends Component {
    render() {
        const message = this.props.message
        return (
            <div>
                <h1>{message}</h1>
            </div>
        );
    }
}

export default Notification;
