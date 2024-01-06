import React, { useState } from "react";
import Card from "./Card";
import './CardSection.css';

const CardSection = ({courses}, category) => {
    
    let coursesArray = []; //returns data of all courses of different category

    const [likedCourses, setLikedCourses] = useState([]);

    const getCourses = () => {
        console.log({courses});
        Object.values(courses).forEach((courseType) => {
            courseType.forEach((course) => {
                coursesArray.push(course);
            });
        });
        return coursesArray;
    }

    return(
        <div className="cardSection">
            {
                (courses!==null)?
                getCourses().map( (course) =>{
                    return(<Card course={course} 
                            likedCourses={likedCourses} 
                            setLikedCourses={setLikedCourses}/>)
                })
                :<div className="loader"></div>
            }
        </div>
    )
}

export default CardSection;