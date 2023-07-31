import { useState } from 'react';
import "./App.css";
import Calendar from 'react-calendar';

function Calendars() {
 const [date, setDate] = useState(new Date());

 return (
 <div className='app'>
   <h1> Calendar view for assignment tracking</h1>
   <p>click on the dates in the calendar to set the start date and end date of assignment </p>
   <p></p>
   <div>
     <Calendar onChange={setDate} value={date} selectRange={true}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
    <a href="/Calendar">authenticate with google calendar</a>
 </div>
  );
}

export default Calendars; 