import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import UserIcon from '../assets/user.svg';

class ChatBubbleRight extends Component {
    render() {
        return (
            <div className="answer right">
                <div className="avatar">
                    <img src={UserIcon} alt={this.props.name} />
                    {this.props.online ? <div className="status online" /> : <div className="status offline" />}
                </div>
                <div className="name">{this.props.name}</div>
                {this.props.content === 'text' && <div className="text">{this.props.message}</div>}
                {this.props.content === 'image' && <img alt="Selfie" src={this.props.message} />}
                <div className="time"><TimeAgo date={this.props.timestamp} minPeriod={5} /></div>
            </div>
        );
    }
}

export default ChatBubbleRight;
