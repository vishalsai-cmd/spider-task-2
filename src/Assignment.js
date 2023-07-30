import React,{Component} from "react";
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
                Email<h1>{this.state.userData.email}</h1>
                 <h1>{this.state.userData.duedate}</h1>
                 <h1>{this.state.userData.course}</h1>
                <a href="./QuizChallenge">challenge quiz</a>
            </div>
        )
    }
}