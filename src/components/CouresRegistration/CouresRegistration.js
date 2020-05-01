import React, { Component } from 'react'
import './CouresRegistration.css';

 class CouresRegistration extends Component {
    render() {
        return (
            <div >
                  <h2>Course Registration Page</h2>
                <table class="table table-bordered">
    <thead class="thead-light">
        <tr>
            <th>№</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Credits</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>    
            <td>1</td>
            <td>CS102</td>
            <td>Programming Language 2</td>
            <td>6</td>
          
        </tr>
        <tr>
            <td>2</td>
            <td>CS 108</td>
            <td>Engineering Computer Graphics</td>
            <td>6</td>
            
        </tr>
        <tr>
            <td>3</td>
            <td>CS202</td>
            <td>Data Structure</td>
            <td>6</td>
           
        </tr>      
        <tr>
            <td>4</td>
            <td>CS102</td>
            <td>Programming Language 2</td>
            <td>6</td>
           
        </tr>
        <tr>
            <td>5</td>
            <td>CS 108</td>
            <td>Engineering Computer Graphics</td>
            <td>6</td>
           
        </tr>
        <tr>
            <td>6</td>
            <td>CS202</td>
            <td>Data Structure</td>
            <td>6</td>
            
        </tr>    
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>36</td>
            </tr>              
    </tbody>
</table>

            <button className="btn btn-primary floar-right">Send approve</button>
                
                
            </div>
        )
    }
}

export default CouresRegistration
