/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "../Courses/Courses.css";
import Calculation from '../Calculation/Calculation';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState([0]);
    const [totalCredit, setTotalCredit] = useState([]);
    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleSelect = (course) => {
        const isExist = selectedCourse.find((item) => item.id == course.id);
        let count = course.credit;
        if (isExist) {
            alert("Already selected !")
        }
        else {
            selectedCourse.forEach((item) => {
                count = count + item.credit
            })
            const totalRemainingCredit = 20 - count;
            if (count > 20) {
                return alert("You cant't add more than 20 credit !")
            }
            else {
                setRemaining(totalRemainingCredit);
                setTotalCredit(count);
                setSelectedCourse([...selectedCourse, course]);
            }
        }

    }

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
                                    <button onClick={() => handleSelect(course)} className='select-btn'>Select</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="calculation">
                    <Calculation selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit}></Calculation>
                    <hr></hr>
                    <p className='total-credit'>Total Credit Hour : {totalCredit}</p>
                </div>
            </div>
        </div>
    );
};

export default Courses;