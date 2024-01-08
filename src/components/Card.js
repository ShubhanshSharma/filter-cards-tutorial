import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import './Card.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Card = (props) =>{//{course},likedCourses,setLikedCourses

    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;

    const likeHandler = () => {
        //already liked courses
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) => prev.filter((id)=>(id!==course.id)));
            console.log('removed from liked courses');
            toast.warning("removed from liked courses");
        }
        //not liked courses
        else{
            if(likedCourses==[]){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses( (existingLikedCourses) => [...existingLikedCourses,course.id]);
            }
            console.log('liked added');
            toast.success("liked added");
        }
    }
     
    return(
        <div className="Card">
            <div>
                <img src={course.image.url}></img>
            </div>

            <div>
                <button className="like" onClick={likeHandler}>
                    {
                        likedCourses.includes(course.id)? 
                        <FcLikePlaceholder />:
                        <FcLike className="likeSVG"/>
                    }
                </button>
            </div>
            
            <div>
                <p className="head">{course.title}</p>
                <p className="desc">
                    {
                        course.title.lenght >100 ?
                        (course.id):
                        (course.description.substring(0,170)+".....")

                    }
                </p>
            </div>
        </div>
    )
}

export default Card;