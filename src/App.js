import logo from './logo.svg';
import './App.css';
import Array from './Function';
import React,{useState} from 'react'
function App() {
 

  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },

    {name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }


    
    
    ]

    let[count,setCount]=useState("Red")
    const textChange=()=>{
      setCount("Blue")
    }
  

   

  return (
    <div className="App">
      <p>value:{count}</p>
      <button onClick={textChange}>Click</button>
      <Array details={employee}/>
     
    </div>
  );
}

export default App;
