import React, { Component } from 'react';
import RobotIcon from '../assets/robot.svg';


class Induction extends Component {
    render() {
        return (
            <div className='answer induction' >

                <div className='text'>
                    <p className='header'>Induction</p>
                    <p>Hi! My name is Reebo. I have been created by the TCS Incubations team, here in Trivandrum </p>
                    <p>Welcome to Trivandrum! Trivandrum is famous for it's historic temples, sprawling beaches and it's serene natural beauty.</p>
                    <p>There are 4 buildings in this campus, the <b>Delivery Centre, Peepul Park, LDI Building</b> and <b>CLC building</b>. You are now standing in the <b>Delivery Centre</b>. Please make sure you have access to enter this building. If you do not have access, please contact the security and provide the necessary information for getting access.</p>
                    <p>This building has 5 floors. We have two blocks, Block A to your right and Block B to your left. The ground floor is also known as <b>Podium Floor</b> and is indicated by the alphabet <b>'P'</b> in the lift. The TCS Incubations team is housed in this floor. The ground floor also has a customer care center, access points and lifts for accessing various floors. The <b>Admin, HR </b>and<b> RMG </b>sits on the first floor, <b>ODC 3</b> of Block A. The <b>IS</b> team sits on Block B second floor.</p>
               
                </div>                       
            </div>

        );
    }
}

export default Induction;
