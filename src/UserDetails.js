import {React, Component,useState }from 'react';
import "./App.css";
import Calendar from 'react-calendar';

export default class User extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            assignment_name:"",
            duedate:"",
            course:""

        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const {email,assignment_name,duedate,course}=this.state;
        fetch("http://localhost:8000/userDetails",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                email,
                assignment_name,
                duedate,
                course
            })
        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userRegister");
            if(data.status == "ok"){
                alert("login successful");
                window.localStorage.setItem("token",data.data);
                window.location.href="./Assignment";
            }
        })
    }
    render(){
        return(
            <div className='form2'>
                <form onSubmit={this.handleSubmit}>
                    <label>email</label>
                   <input type="email" style={{marginLeft:60,marginBottom:25,marginTop:100}} placeholder='enter email' onChange={(e) =>{this.setState({email:e.target.value})}} />
                   <label>assignment</label>
                   <input type="text" style={{marginLeft:30,marginBottom:25}} placeholder="enter assignment name" onChange={(e) =>{this.setState({assignment_name:e.target.value})}} />
                   <label>duedate</label>
                   <input type="text" style={{marginLeft:60,marginBottom:25}} placeholder="duedate" onChange={(e) =>{this.setState({duedate:e.target.value})}} />
                   <label>course</label>
                   <input type="text" style={{marginLeft:60,marginBottom:25}} placeholder="course" onChange={(e) =>{this.setState({course:e.target.value})}} />
                   <br />
                   <button type="submit" style={{marginLeft:70}}>create Assignment</button>
                </form>
            </div>
        )
    }
}
