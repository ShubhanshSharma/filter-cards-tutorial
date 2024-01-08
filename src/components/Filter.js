import { useState } from 'react';
import './Filter.css';


const Filter = (props) => {

    const setCategory =props.setCategory;
    const filter = props.filterData;
    const category = props.category;

    // const [] = useState([]);
    // function filterHandler(event){
    //     setCourses((prev) => prev.filter(courses.courses!=event.title))
    // }

    function filterHandler(title){
        setCategory(title);
    }

    console.log(filter);
    return (<div className='filters'>
        {filter.map( (data) =>{
            return (<button className={` text-white bg-[#22224d] p-2 rounded-md
                      ${ category===data.title ? "border-[3px] border-sky-500 " : "" } `} 
                
                
                onClick={() => filterHandler(data.title)}>{data.title}</button>);
        })}
    </div>
    )
}

export default Filter;