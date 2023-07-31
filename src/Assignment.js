import React,{Component} from "react";
import "./App.css";
import { useState } from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
export default class Assignment extends Component {
    constructor(props){
        super(props);
        this.state={
            userData:"",
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:8000/Assignmentone",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token"),
            })

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userData");
            this.setState({userData:data.data});
        })
        .catch((e) =>{
           console.log(e);
        })
    }
    render(){
        return(
            <div>
                <div className="form3">
                 Email:<h1 style={{marginBottom:70}}>{this.state.userData.email}</h1>
                 <h1 style={{marginBottom:70}}>{this.state.userData.email}</h1>
                 dudate:<h1 style={{marginBottom:70}}>{this.state.userData.duedate}</h1>
                 course:<h1 style={{marginBottom:120}}>{this.state.userData.course}</h1>
                 <a href="./Calendars" style={{marginLeft:130,textDecoration:"none"}}>Calendar View</a>
                </div>
            </div>
               
        )
    }
}