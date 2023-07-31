import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import User from "./UserDetails";
import Assignmnent from "./Assignment";
import Calendar from "./Calendar";
import Calendars from "./Calendarview";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path="/" element={<Login />}></Route>
         <Route path="/Signup" element={<Signup />}></Route>
         <Route path="/UserDetails" element={<User />}></Route>
         <Route path="/Assignment" element={<Assignmnent />}></Route>
         <Route path="/Calendar" element={<Calendar />}></Route>
         <Route path="/Calendars" element={<Calendars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
