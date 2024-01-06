import { useState } from 'react';
import './Filter.css';

const Filter = (filter, category, setCategory) => {

    // const setCourses =props.setCourses;
    // const courses = props.courses;
    // const filter = props.filterData;

    // const [] = useState([]);
    // function filterHandler(event){
    //     setCourses((prev) => prev.filter(courses.courses!=event.title))
    // }

    function filterHandler(title){
        setCategory(title);
    }

    console.log('data of filters'); 
    console.log(filter.filterData);
    return (<div className='filters'>
        {filter.filterData.map( (data) =>{
            return (<button onClick={() => filterHandler(data.title)}>{data.title}</button>);
        })}
    </div>
    )
}

export default Filter;