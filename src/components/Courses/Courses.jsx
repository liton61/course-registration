/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "../Courses/Courses.css";
import Calculation from '../Calculation/Calculation';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h1 className='title'>Course Registration</h1>
            <div className='container'>
                <div className="card-container">
                    <div className="course-container">
                        {
                            courses.map((course) => (
                                <div key={course.id} className="card">
                                    <div className="card-img">
                                        <img src={course.img} alt="" />
                                    </div>
                                    <h4 className='course-title'>{course.courseName}</h4>
                                    <p className='course-description'>{course.description}</p>
                                    <div className='price-credit'>
                                        <p><i className="fa-solid fa-dollar-sign"></i> Price :{course.price}</p>
                                        <p><i className="fa-solid fa-book-open"></i> Credit :{course.credit} hrs</p>
                                    </div>
                                    <button className='select-btn'>Select</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="calculation">
                    <Calculation></Calculation>
                </div>
            </div>
        </div>
    );
};

export default Courses;