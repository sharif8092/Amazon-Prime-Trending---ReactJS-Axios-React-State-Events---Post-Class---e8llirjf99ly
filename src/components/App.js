import React, {Component, useState} from "react";
import slides from "../data.js";
import '../styles/App.css'

const App = (props) => {
   const [data , setdata] = useState(0);

   function nextSlide(){
    // if(data<slides.length-1)
    {setdata(data+1)}

   }
   function prevSlide(){
    // if(data>=1)
    {
    setdata(data-1)};

   }
  return (
    
    <>
    
     <p>{slides[data].title}</p>
    <button onClick={nextSlide} >Next</button>
    <button onClick={prevSlide} disabled={data<1 ? "true" : "false"}>Prev</button>
  
    
  
    
    </>
  )
}


export default App;
