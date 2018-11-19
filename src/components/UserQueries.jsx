import React, { Component } from 'react';
class UserQueries extends Component {

    state = {
        items: this.props.message.split(','),
        btn: {
            disabled:false
        }    }

    sendEvent = (response) => () => {
        const {btn}=this.state;
        this.props.socket.emit('event-query-suggestions-response', response);
        btn.disabled=true;
        this.setState({btn});
    }

    render() {
        return (

            <div className="suggestion-bubble-container">
                {this.state.items.map((item,index) => <button key={index} disabled={this.state.btn.disabled} className='text' onClick={this.sendEvent(item)}>{item}</button>)}
            </div>
        );
    }
}

export default UserQueries;
