import React, { Component } from 'react'
import './HomeNavbar.css';
import {Link} from 'react-router-dom';

class HomeNavbar extends Component {
    render() {
        return (
            <div>
                <div class=" border-right" id="sidebar-wrapper">
                    <div class="list-group list-group-flush">
                        <Link to="/" class="list-group-item list-group-item-action ">Home Page</Link>
                        <Link to="gradeslist" class="list-group-item list-group-item-action ">Grades List</Link>
                        <Link to="#" class="list-group-item list-group-item-action ">Course Schedule</Link>
                        <Link to="#" class="list-group-item list-group-item-action ">My Curricula</Link>
                        <Link to="#" class="list-group-item list-group-item-action ">Course Registration</Link>
                        <Link to="#" class="list-group-item list-group-item-action ">Transcript</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomeNavbar
