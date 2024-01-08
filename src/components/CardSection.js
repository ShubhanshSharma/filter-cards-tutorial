import React, { useState } from "react";
import Card from "./Card";
import './CardSection.css';

const CardSection = (props) => {
    const courses = props.courses;
    const category = props.category;
    let coursesArray = []; //returns data of all courses of different category

    console.log(category);
    const [likedCourses, setLikedCourses] = useState([]);

    const getCourses = () => {
        console.log({courses});
        if(category=="All"){
            Object.values(courses).forEach((element) => {
                element.forEach((element) => {
                    coursesArray.push(element);
                });
            });
            return coursesArray;
        }

        else{
            console.log(courses[category])
           return courses[category];
        }
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