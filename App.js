import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState("");
  const [status,setStatus]=useState("");
  const [errordispaly,setErrordisplay]=useState(false);
  const[err,setErr]=useState(false);
  function data()
  {
      if(height>0 && weight>0)
      {
        setErrordisplay(false)
        const h=height/100;
        const r=(weight/(h*h)).toFixed(2)
        setBmi(r)
        if(r<18.5)
          setStatus("Under Weight")
        else if(r>=18.5 && r<=24.9)
          setStatus("Normal Weight")
        else if(r>=25 && r<29.9)
          setStatus("Over Weight")
        setErr(true)
      }
      else{
        setErrordisplay(true)
      }
  }
  function clear()
  {
    setBmi("");
    setHeight("");
    setWeight("");
    setStatus("");
    setErrordisplay(false);
    setErr(false)

  }

  return (
    <>
    <div className="tot-box">
   
      <div className="right">
        <div className="innerbox">
          <h1>BMI CALCULATOR</h1>
          { errordispaly &&<span>eneter the valid  data</span>}
          <div className="heigh">
            <p>heigth in cm</p>
            <input  value={height}  onChange={(e)=>setHeight(e.target.value)} type="number" />
          </div>
          <div className="weigh">
             <p>weight in kg</p>
             <input value={weight}  onChange={(e)=>setWeight(e.target.value)} type="number" />
          </div>
          <div className="butt">
          <button onClick={data}>Sumbit</button>
          <button onClick={clear}> clear </button>
          </div>
          {
            err && 
              <div className="output">
                <h5>Your BMI is : <span>{bmi}</span></h5> 
                  <h5 className="up"> Status : {status}</h5>
             </div>
           }
        </div> 
     
      </div>
    </div>
    </>
  );
}

export default App;
