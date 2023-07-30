import React, { Component } from 'react'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                   <input type="email" placeholder='enter email' onChange={(e) =>{this.setState({email:e.target.value})}} />
                   <input type="text" placeholder="enter assignment name" onChange={(e) =>{this.setState({assignment_name:e.target.value})}} />
                   <input type="text" placeholder="duedate" onChange={(e) =>{this.setState({duedate:e.target.value})}} />
                   <input type="text" placeholder="course" onChange={(e) =>{this.setState({course:e.target.value})}} />
                   <button type="submit">create Assignment</button>
                </form>
            </div>
        )
    }
}
