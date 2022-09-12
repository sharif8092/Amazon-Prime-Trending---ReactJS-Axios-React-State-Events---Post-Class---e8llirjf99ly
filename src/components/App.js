import React, {Component, useState} from "react";
import slides from "../data.js";
import '../styles/App.css'

const App = (props) => {
   const [data , setdata] = useState(0);

   function nextSlide(){
    // if(data<slides.length-1)
    {setdata(data+1)}
    console.log(slides.length-2);
    console.log(data);

   }
   function prevSlide(){
    // if(data>=1)
    {
    setdata(data-1)};

   }
   function firstSlide(){
    setdata(0)
   }
  return (
    
    <>
    
     <h1  data-testid="title">{slides[data].title}</h1>
     <p data-testid="text">{slides[data].text}</p>
    <button onClick={nextSlide} disabled={(slides.length-1)===data  } data-testid="button-next" >Next</button>
    <button onClick={prevSlide} disabled={data===0} data-testid="button-prev" >Prev</button>
    <button onClick={firstSlide} disabled={data===0} data-testid="button-restart" >Restart</button>
  
    
  
    
    </>
  )
}


export default App;
