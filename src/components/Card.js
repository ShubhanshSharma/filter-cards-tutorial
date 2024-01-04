import React from "react";
import { FcLike } from "react-icons/fc";
import './Card.css';


const Card = ({course}) =>{
    return(
        <div className="Card">
            <div>
                <img src={course.image.url}></img>
            </div>

            <div>
                <button>
                    <FcLike />
                </button>
            </div>
            
            <div>
                <p className="head">{course.title}</p>
                <p className="desc">{course.description.substring(0,140)}....</p>
            </div>
        </div>
    )
}

export default Card;