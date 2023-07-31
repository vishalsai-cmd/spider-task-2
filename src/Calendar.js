import React,{useState} from 'react';
import axios from "axios";
import "./App.css";

function Calendar() {
    const [summary,setSummary]=useState("");
    const [description,setDescription]=useState("");
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/schedule_event",{
                /* summary,description */
                headers:{
                  "Content-Type":"application/json",
                  Accept:"application/json",
                  "Access-control-Allow-origin":"*",
              },
              body:JSON.stringify({
                  summary,
                  description,
              }),
            })
            .then(response =>{
              console.log(response.data)
            })
        }
        catch(e){
            console.log(e);
        }

    }
  return (
    <div className='form2'>
      <form onSubmit={submit}>
        <input type="text" placeholder="enter summary" style={{marginTop:40,marginLeft:50,height:20}} onChange={(e) =>{setSummary(e.target.value)}} />
        <input type="text" placeholder="enter description" style={{marginTop:40,marginLeft:50,height:20}} onChange={(e)=>{setDescription(e.target.value)}} />
        <input type="datetime-local" style={{marginTop:40,marginLeft:50,height:20}} placeholder="startDate" />
        <input type="datetime-local" style={{marginTop:40,marginLeft:50,height:20}} plceholder="EndDate" />
        <br />
        <button type="submit" style={{marginTop:40,marginLeft:70}}>create event</button>
      </form>
    </div>
  )
}

export default Calendar;
