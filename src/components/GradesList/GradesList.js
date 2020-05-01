import React, { Component } from 'react'

 class GradesList extends Component {
    render() {
        return (
            <div>
                <h2>Grades List Page</h2>
                <table class="table table-bordered">
    <thead class="thead-light">
        <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Attendance</th>
            <th>Total Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CS102</td>
            <td>Programming Language 2</td>
            <td>6</td>
            <td>100%</td>
            <td>84</td>
        </tr>
        <tr>
            <td>CS 108</td>
            <td>Engineering Computer Graphics</td>
            <td>6</td>
            <td>100%</td>
            <td>76</td>
        </tr>
        <tr>
            <td>CS202</td>
            <td>Data Structure</td>
            <td>6</td>
            <td>100%</td>
            <td>54</td>
        </tr>      
        <tr>
            <td>CS102</td>
            <td>Programming Language 2</td>
            <td>6</td>
            <td>100%</td>
            <td>84</td>
        </tr>
        <tr>
            <td>CS 108</td>
            <td>Engineering Computer Graphics</td>
            <td>6</td>
            <td>100%</td>
            <td>76</td>
        </tr>
        <tr>
            <td>CS202</td>
            <td>Data Structure</td>
            <td>6</td>
            <td>100%</td>
            <td>54</td>
        </tr>                  
    </tbody>
</table>
                
            </div>
        )
    }
}

export default GradesList
