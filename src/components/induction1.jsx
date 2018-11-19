import React, { Component } from 'react';


class Induction1 extends Component {
    render() {
        return (
            <div className='answer induction'>
                <div className='text'>
                    <table style={{width:'100%'}}>
                        <tr>
                            <th>Team</th> <th>Spoke</th><th>Contact Numbers</th><th>E-Mail ID</th>
                        </tr>
                        <tr><td>HR</td><td>Sapna Koshy</td><td>2509</td><td>sapna.koshy@tcs.com</td></tr>
                        <tr><td>Admin</td><td>J Geetha</td><td>4440</td><td>j.geetha@tcs.com</td></tr>
                        <tr><td>RMG</td><td>Ronnie Cherian</td><td>4453</td><td>ronnie.david@tcs.com </td></tr>
                    </table>
                    <br></br>
                    <p>The cafeteria is located on the bottom floor towards your right. All the Buzz numbers in Trivandrum DC start with #0447.</p>
                    <p>In case of a fire emergency, exit the building using the closest emergency exit and assemble at the assembly area below. Please make a note of the Exit signs above. Each floor has a fire Marshall whose contact numbers are mentioned near the lift.</p>
                    <p>Every floor has a washroom towards the corners. The nearest washroom is located on your right side after crossing the security check.  Would you like a printout of the induction document?</p>
                    
                </div>
            </div>

        );
    }
}

export default Induction1;
