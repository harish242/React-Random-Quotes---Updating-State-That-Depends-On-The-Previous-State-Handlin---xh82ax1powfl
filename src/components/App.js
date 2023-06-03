import React from "react";
import {useState,useEffect} from 'react'
import "../styles/App.css";
  var colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];


const App = () => {
  const[quote,setQuote]=useState({content:"",author:""})
  const[backgroundColor,setBackgroundColor]=useState('#16a085')
  useEffect(()=>{
    fetchquote()
    },[])
    const fetchquote=()=>{
      fetch('https://api.quotable.io/random').then(response=>response.json()).then(data=>{
        setQuote({content:data.content,author:data.quthor})
        setBackgroundColor(getRandomColor())
      }).catch(error=>console.log(error))
    }
    const getRandomColor=()=>{
    
      const randomIndex=Math.floor(Math.random()*colors.length)
      return colors[randomIndex]
    }
  

    return (
      <div id="main" style={{backgroundColor}}>
        <div id="wrapper">
          <div className='quote-text'>{quote.content}</div>
          <div className='quote-author'>{quote.author}</div>
          <button id='new-quote' onClick={fetchquote}>Next quote</button>
        </div>
      </div>
    );
};

export default App;
