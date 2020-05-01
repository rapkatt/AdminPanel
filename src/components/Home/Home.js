import React, { Component } from 'react';

import Header from '../Header';
import HomeNavbar from '../HomeNavbar';
import Dashboard from '../Dashboard';
import GradesList from '../GradesList';
import CourseRegistration from '../CouresRegistration';






class Home extends Component {

    render() {
        return (
            <div className="container">
                <Header />

                <div className="row pt-5">
                    <div className="col-lg-3"> <HomeNavbar /></div>
                    <div className="col-lg-9">
                        <Dashboard/>
                        <GradesList/>
                        <CourseRegistration/>
                    </div>
                </div>






            </div>



        )
    }
}

export default Home
