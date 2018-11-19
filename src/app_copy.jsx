import React, { Component } from 'react';
import uniqid from 'uniqid';
import openSocket from 'socket.io-client';

import './App.css';
import WelcomeCover from './assets/welcome-cover.jpeg';

import ChatBubbleLeft from './components/ChatBubbleLeft';
import ChatBubbleRight from './components/ChatBubbleRight';
import UserQueries from './components/UserQueries';
import Induction from './components/induction';
import Induction1 from './components/induction1';

import Keyboard from 'react-simple-keyboard';
import 'simple-keyboard/build/css/index.css';
const endpoint = 'http://localhost:8000';
const socket = openSocket(endpoint);


class App extends Component {

    state = {
        user: {
            name: "Guest",
            online: true,
            empid: '',
            cardno: '',
            vehicleNo: '',
            email:'',
            Project:'',
            ODC:'',
        },
        robot: {
            name: "Reebo Assistant",
            online: true,
        },
        query: {
            name: " Queries",
            online: true,
        },
        messages: [],
        keypad: {
            title: '',
            placeholder: '',
            role: 'none',
            visible: false,
            value: '',
            type: '',
            next:'',
        },
        keyboard: {
            visible: false,
            text: '',
            role:'none',
            placeholder:'',
            next:'',

        }
    }

    handleKeypadAction = (action) => {

        const { keypad } = this.state;

        switch (action) {
            case '1':
                keypad.value += '1';
                break;
            case '2':
                keypad.value += '2';
                break;
            case '3':
                keypad.value += '3';
                break;
            case '4':
                keypad.value += '4';
                break;
            case '5':
                keypad.value += '5';
                break;
            case '6':
                keypad.value += '6';
                break;
            case '7':
                keypad.value += '7';
                break;
            case '8':
                keypad.value += '8';
                break;
            case '9':
                keypad.value += '9';
                break;
            case '0':
                keypad.value += '0';
                break;
            case 'del':
                if (!keypad.value) break;
                keypad.value = keypad.value.substr(0, keypad.value.length - 1);
                break;
            case 'A':
                keypad.value += 'A';
                break;
            default: break;
        }

        this.setState({ keypad });
    }

    // handleKeypadConfirm = () => {
    //     console.log('Keypad Confirm');
    //     const { keypad, user, keyboard } = this.state;

    //     if (keypad.length === 0 && keyboard.text === '') return;
    //     if (keypad.length!==0){
    //         user.empid = keypad.value;
    //     }
    //     // socket.emit('event-empid-received');
    //     // case 'cardno':
    //     //     user.cardno = keypad.value;
    //     //     socket.emit('event-cardno-received');
    //     //     break;


    //     keypad.title = '';
    //     keypad.placeholder = '';
    //     keypad.role = 'none';
    //     keypad.visible = false;
    //     keypad.value = '';

        
    //     if (keyboard.role === "Vehicle") {
    //         user.vehicleNo = keyboard.text;
    //     }
    //     else if (keyboard.role === "Name") {
    //         user.name = keyboard.text;
    //     }
    //     else if (keyboard.role ==="induction"){
    //         user.email = keyboard.text;
    //         user.empid='';
    //         user.vehicleNo='';
    //     }
    //     keyboard.visible = false;
    //     keyboard.text = '';
    //     keyboard.role='none';
    //     if (user.empid && user.name !== 'Guest' && user.name!=='') {
    //         console.log("User name:", user.name, "User EmpID", user.empid);
    //         socket.emit('process-user-SEZ-details', { empid: user.empid, name: user.name });
    //         user.empid = '';
    //         user.name = '';
    //         this.setState({ keypad, user ,keyboard});
    //     } else if (user.empid && user.vehicleNo) {
    //         console.log("user vehicle no", user.vehicleNo, user.empid);
    //         socket.emit('process-user-vehicle-details', { empid: user.empid, vehicleNo: user.vehicleNo });
    //         user.empid = '';
    //         user.vehicleNo = '';
    //         this.setState({ keypad, user, keyboard });
    //     }
    //     else if (user.email){
    //         socket.emit('event-send-induction-document',user.email);
    //         user.email=''
    //         this.setState({ keypad, user, keyboard });
    //         return;
    //     }
    //     else {
    //         this.setState({ keypad, keyboard });
    //     }
    // }
    handleKeypadConfirm = () => {
        console.log('Keypad Confirm');
        const { keypad, user, keyboard } = this.state;

        if (keypad.length === 0) return;
        if (keypad.role==='SEZ Card' || keypad.role ==='Vehicle'){
            user.empid = keypad.value;
            keypad.next="Name";
            keyboard.role=keypad.next;
        }
        // socket.emit('event-empid-received');
        // case 'cardno':
        //     user.cardno = keypad.value;
        //     socket.emit('event-cardno-received');
        //     break;
        keypad.title = '';
        keypad.placeholder = '';
        keypad.visible = false;
        keypad.value = '';
        if (keypad.next==='Name'){
        keyboard.role="Name";
        keyboard.visible=true;
        }
        keypad.next="";
        this.setState({keyboard,keypad,user})
    }
       
        // if (keyboard.role === "Vehicle") {
        //     user.vehicleNo = keyboard.text;
        // }
        // else if (keyboard.role === "Name") {
        //     user.name = keyboard.text;
        // }
        // else if (keyboard.role ==="induction"){
        //     user.email = keyboard.text;
        //     user.empid='';
        //     user.vehicleNo='';
        // }
        // keyboard.visible = false;
        // keyboard.text = '';
        // keyboard.role='none';
        // if (user.empid && user.name !== 'Guest' && user.name!=='') {
        //     console.log("User name:", user.name, "User EmpID", user.empid);
        //     socket.emit('process-user-SEZ-details', { empid: user.empid, name: user.name });
        //     user.empid = '';
        //     user.name = '';
        //     this.setState({ keypad, user ,keyboard});
        // } else if (user.empid && user.vehicleNo) {
        //     console.log("user vehicle no", user.vehicleNo, user.empid);
        //     socket.emit('process-user-vehicle-details', { empid: user.empid, vehicleNo: user.vehicleNo });
        //     user.empid = '';
        //     user.vehicleNo = '';
        //     this.setState({ keypad, user, keyboard });
        // }
        // else if (user.email){
        //     socket.emit('event-send-induction-document',user.email);
        //     user.email=''
        //     this.setState({ keypad, user, keyboard });
        //     return;
        // }
        // else {
        //     this.setState({ keypad, keyboard });
        // }
    
    handleKeypadCancel = () => {

        const { keypad, user } = this.state;

        keypad.title = '';
        keypad.placeholder = '';
        keypad.role = 'none';
        keypad.visible = false;
        keypad.value = '';

        user.empid = '';
        user.cardno = '';

        this.setState({ keypad });
    }

    onChange = (input) => {
        const { keyboard } = this.state;
        keyboard.text = input;
        console.log("Keyboard Text in function",this.state.keyboard.text)
        this.setState({ keyboard });
    }

    onKeyPress = (button) => {
        console.log("Button pressed", button);
        if (button === "{enter}") {
            const { keyboard, keypad ,user} = this.state;

            if (keyboard.role==="Name"){
                user.name=keyboard.text;
                console.log("user name",user.name);
                console.log("Keypad role ",keypad.role)
                if (keypad.role==='SEZ Card'){
                    keyboard.next='Project';
                    keyboard.placeholder="Enter Project Name";
                    keyboard.title="Project Name";

                }
                else if (keypad.role==='Vehicle'){
                    keyboard.next='Vehicle';
                    keyboard.placeholder="Enter vehicle number";
                    keyboard.title="Vehicle Pass";
                    keyboard.text="";
                }
            }
            else if (keyboard.role==="Project"){
                console.log("Ask Project name");
                user.project=keyboard.text;
                keyboard.text="";
                keyboard.next='ODC';
            }
            else if (keyboard.role==="Vehicle"){
                user.vehicleNo=keyboard.text;
                keyboard.text="";
                keyboard.next='none';
            } 
            else if (keyboard.role==="ODC"){
                user.ODC=keyboard.text;
                keyboard.text="";
                keyboard.next='none';
            }
            if (keyboard.next==='none'){
                if (keypad.role==='SEZ Card'){
                    socket.emit('event-user-details',user);
                    console.log('User details',user.name,user.empid);
                }
                else if (keypad.role==='Vehicle'){
                    console.log('User Details',user.name,user.empid,user.vehicleNo);
                }
                keyboard.next='';
                keyboard.role='';
                keyboard.visible=false
            }

            keyboard.role=keyboard.next;
            console.log("Keyboard Role",this.state.keyboard.role)
            console.log("Keyboard Text",keyboard.text)
            keyboard.text=" ";
            this.keyboard.clearInput();
            this.setState({user,keyboard,keypad});
        }

    }
    componentDidMount() {

        // User Message
        socket.on('event-user-message', (message) => {
            this.setState(oldState => ({
                messages: [...oldState.messages, {
                    key: uniqid.time(),
                    from: 'user',
                    name: this.state.user.name,
                    content: 'text',
                    message: message,
                    timestamp: new Date().getTime()
                }]
            }));
        });

        // Robot Message
        socket.on('event-robot-message', (message) => {
            this.setState(oldState => ({
                messages: [...oldState.messages, {
                    key: uniqid.time(),
                    from: 'robot',
                    name: this.state.robot.name,
                    content: 'text',
                    message: message,
                    timestamp: new Date().getTime()
                }]
            }));
        });
        socket.on('event-induction', () => {
            this.setState(oldState => ({
                messages: [...oldState.messages, {
                    key: uniqid.time(),
                    from: 'induction',
                    content: 'text',

                }]
            }));
        });
        socket.on('event-induction-1', () => {
            this.setState(oldState => ({
                messages: [...oldState.messages, {
                    key: uniqid.time(),
                    from: 'induction-1',
                    content: 'text',

                }]
            }));
        });
        socket.on('event-induction-document', () => {
            const { keyboard } = this.state;
            console.log('induction Document mode');
            keyboard.visible='true';
            keyboard.title='E-Mail';
            keyboard.placeholder='Enter E-mail'
            keyboard.role='induction'
            this.setState({ keyboard });
        });
        //Show suggestion bubbles//
        socket.on('event-query-suggestions', (message) => {
            this.setState(oldState => ({
                messages: [...oldState.messages, {

                    key: uniqid.time(),
                    from: 'query',
                    content: 'text',
                    message: message

                }]
            }));
        });
        // Ask Employee ID
        socket.on('event-ask-empid', () => {
            const { keypad } = this.state;
            keypad.title = 'Employee ID';
            keypad.placeholder = 'Enter Employee ID...';
            keypad.role = 'empid';
            keypad.visible = true;
            keypad.value = '';
            keypad.type = 'Numpad';
            this.setState({ keypad });
        });

        //ask vehicle no
        socket.on('event-vehicle-pass', () => {
            const { keypad } = this.state;
            keypad.visible = true;
            keypad.value = '';
            keypad.role = 'Vehicle';
            keypad.title='Vehicle Pass';
            keypad.placeholder='Enter Your Employee ID'
            this.setState({ keypad });
        });
        //Ask Name
        socket.on('event-SEZ-details', () => {
            const { keypad } = this.state;
            keypad.visible = true;
            keypad.value = '';
            keypad.title='SEZ Card';
            keypad.role = 'SEZ Card';
            keypad.placeholder='Enter Employee ID';
            this.setState({ keypad });
        });
        // Ask Card Number

        // socket.on('event-ask-cardno', () => {
        //     const { keypad } = this.state;
        //     keypad.title = 'Card Number';
        //     keypad.placeholder = 'Enter Card Number...';
        //     keypad.role = 'cardno';
        //     keypad.visible = true;
        //     keypad.value = '';
        //     keypad.type = 'Numpad';
        //     this.setState({ keypad });
        // });
        // Display Selfie Image
        socket.on('event-selfie-taken', (data) => {
            this.setState(oldState => ({
                messages: [...oldState.messages, {
                    key: uniqid.time(),
                    from: 'robot',
                    content: 'image',
                    message: data,
                    timestamp: new Date().getTime()
                }]
            }));
        });

        // Set User Name
        socket.on('event-user-setname', (name) => {
            const { user } = this.state;
            user.name = name;
            this.setState({ user });
        });
        // socket.on('event-vehicle', (vehicle_number) => {
        //     // const { user } = this.state;
        //     // user.vehicleNo = vehicle_number;
        //     // console.log(user.vehicleNo);
        //     // this.setState({ user });

        // });
        // Reset Interface
        socket.on('event-reset-interface', () => {
            const { user } = this.state;
            user.name = 'Guest';
            user.empid = '';
            user.cardno = '';
            this.setState({ user, messages: [] });
        });

    }

    componentDidUpdate() {
        setTimeout(() => {
            this.state.messages.length > 0 && this.messagesEndMarker.scrollIntoView({ behavior: "smooth" });
        }, 500);
    }

    renderBubble = (item) => {
        switch (item.from) {

            case 'user':
                return (
                    <ChatBubbleRight
                        key={item.key}
                        name={item.name}
                        online={this.state.user.online}
                        content={item.content}
                        message={item.message}
                        timestamp={item.timestamp}
                    />)

            case 'robot':
                return (
                    <ChatBubbleLeft
                        key={item.key}
                        name={item.name}
                        online={this.state.robot.online}
                        content={item.content}
                        message={item.message}
                        timestamp={item.timestamp}
                    />)
            case 'query':
                return (
                    <UserQueries
                        key={item.key}
                        content={item.content}
                        message={item.message}
                        socket={socket}
                    />)
            case 'induction':
                return (
                    <Induction
                        key={item.key}
                        content={item.content}
                        message={item.message}
                    // socket={socket}
                    />)
            case 'induction-1':
                return (
                    <Induction1
                        key={item.key}
                        content={item.content}
                        message={item.message}
                    // socket={socket}
                    />)
            default:
            return null;
            
        }
    }

    render() {
        return (
            <React.Fragment>

                {this.state.messages.length === 0 && <div className="standby-container" style={{ background: `url(${WelcomeCover})` }}>
                    <h1>Hello, I am Reebo.</h1>
                    <h3>Do you need any help ?</h3>
                </div>}

                {this.state.messages.length > 0 && <div className="content container-fluid bootstrap snippets">
                    <div className="row row-broken">
                        <div className="col-sm-12 col-xs-12 chat" style={{ overflow: 'scroll-y', outline: 'none' }}>
                            <div className="col-inside-lg decor-default">
                                <div className="chat-body">

                                    {this.state.messages.map(item => this.renderBubble(item))}
                                    <div style={{ float: "left", clear: "both" }}
                                        ref={(el) => { this.messagesEndMarker = el; }}>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            
                {this.state.keypad.visible && <React.Fragment>
                    <div className="modal" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Employee ID</h5>
                                </div>
                                <div className="modal-body">
                                    <div className="container-fluid">


                                        <input type="text" className="form-control" style={{ marginBottom: '10px' }} placeholder='Enter Employee ID' readOnly={true} value={this.state.keypad.value}></input>

                                        <div className="row" style={{ marginBottom: '10px' }}>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('1') }}>1</button></div>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('2') }}>2</button></div>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('3') }}>3</button></div>
                                        </div>
                                        <div className="row" style={{ marginBottom: '10px' }}>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('4') }}>4</button></div>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('5') }}>5</button></div>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('6') }}>6</button></div>
                                        </div>
                                        <div className="row" style={{ marginBottom: '10px' }}>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('7') }}>7</button></div>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('8') }}>8</button></div>
                                            <div className="col-md-4"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('9') }}>9</button></div>
                                        </div>
                                        <div className="row" style={{ marginBottom: '10px' }}>
                                            <div className="col-md-8"><button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => { this.handleKeypadAction('0') }}>0</button></div>
                                            <div className="col-md-4"><button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => { this.handleKeypadAction('del') }}>DEL</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary btn-block" onClick={this.handleKeypadConfirm}>OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop"></div>
                </React.Fragment>}

                {this.state.keyboard.visible && <React.Fragment>
                    <div className="modal" style={{ display: 'block'}}>
                        <div className="modal-dialog modal-lg modal-dialog-centered" style={{maxWidth:'none', width: '90%', height:'70vh'}} role="document">
                            <div className="modal-content" >
                                <div className="modal-header">
                                    <h5 className="modal-title">{this.state.keyboard.role}</h5>
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="form-control" style={{ marginBottom: '10px', fontSize: '2rem',height:'calc(3rem + 2px)' }} placeholder= {this.state.keyboard.placeholder} readOnly={true} value={this.state.keyboard.text}></input>
                                    <div className="container-fluid" style={{fontSize:'1.75rem'}}>
                                        <Keyboard 
                                            onChange={input =>
                                                this.onChange(input)}
                                            onKeyPress={button =>
                                                this.onKeyPress(button)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="backdrop"></div>
                </React.Fragment>
                }



            </React.Fragment>
        );
    }
}

export default App;
