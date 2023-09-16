/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../Calculation/Calculation.css";

const Calculation = ({ selectedCourse, remaining }) => {
    return (
        <div>
            <h5 className='remaining-credit'>Credit Hour Remaining {remaining} hrs</h5>
            <hr></hr>
            <h3 className='course-name'>Course Name</h3>
            {
                selectedCourse.map((course) => (
                    <ol>
                        <li className='list' key={course.id}>{course.courseName}</li>
                    </ol>
                ))
            }
        </div>
    );
};

export default Calculation;