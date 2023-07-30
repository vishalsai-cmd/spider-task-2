import React,{useState} from 'react';
import axios from "axios";

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
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder="enter summary" onChange={(e) =>{setSummary(e.target.value)}} />
        <input type="text" placeholder="enter description" onChange={(e)=>{setDescription(e.target.value)}} />
        <button type="submit">create event</button>
      </form>
    </div>
  )
}

export default Calendar;
