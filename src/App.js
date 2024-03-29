import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { apiUrl, filterData } from './data';
import CardSection from './components/CardSection';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const App = () => {

  const [courses, setCourses] = useState(null);
  const [category , setCategory] = useState(filterData[0].title);
  console.log('category is: ' + category);
  
  useEffect( () =>{
    const info = async() => {
      try{
        const result = await fetch(apiUrl); 
        const data = await result.json();
        setCourses(data.data);
        console.log('data set in courses as:'); 
        console.log(courses);
      }
      catch(error){
        alert('not getting data');
        toast.error("couldn't fetch data");
      }
    }
    
    info();
  },[]); 
  
  

  return (
    <div className="App">
      <Navbar className={``}/>
      <Filter className="filters" filterData={filterData} category={category}
        setCategory={setCategory}/>
      <CardSection courses={courses} category={category}  />
    </div>
    
  );
}

export default App;
