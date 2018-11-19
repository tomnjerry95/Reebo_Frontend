import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import RobotIcon from '../assets/robot.svg';

class ChatBubbleLeft extends Component {
    render() {
        return (
            <div className="answer left">
                <div className="avatar">
                    <img src={RobotIcon} alt={this.props.name} />
                    {this.props.online ? <div className="status online" /> : <div className="status offline" />}
                </div>
                <div className="name">{this.props.name}</div>
                {this.props.content === 'text' && <div className="text">{this.props.message}</div>}
                {this.props.content === 'image' && <div className="text"><small>Here is your picture.</small><br/><img alt="Selfie" className="image" src={this.props.message} /></div>}
                <div className="time"><TimeAgo date={this.props.timestamp} minPeriod={5} /></div>
            </div>
        );
    }
}

export default ChatBubbleLeft;
