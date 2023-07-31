import React,{Component} from "react";
import "./App.css";
export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:"",
            email:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const{fname,lname,email,password}=this.state;
        console.log(fname,lname,email,password);
        fetch("http://localhost:8000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                fname,
                email,
                lname,
                password
            }),

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userRegister")
        })
    }
    render(){
        return(
          <div className="form2">
            <form onSubmit={this.handleSubmit}>
                <h3 style={{marginLeft:100}}>sign up</h3>

                <div>
                    <label>first name</label>
                    <input type="text" placeholder="first name" style={{borderRadius:0.3,marginLeft:50,marginBottom:25}} onChange={(e) =>this.setState({fname:e.target.value})}/>
                    <br />
                </div>
                <div>
                    <label>last name</label>
                    <input type="text" placeholder="last name" style={{borderRadius:0.3,marginLeft:50,marginBottom:25}}  onChange={(e) => this.setState({lname:e.target.value})}/>
                    <br />
                </div>
                <div>
                    <label>email</label>
                    <input type="text" placeholder="email" style={{borderRadius:0.3,marginLeft:75,marginBottom:25}} onChange={(e) => this.setState({email:e.target.value})}/>
                    <br />
                </div>
                <div>
                    <label>password</label>
                    <input type="text" placeholder="password" style={{borderRadius:0.3,marginLeft:50,marginBottom:25}} onChange={(e) => this.setState({password:e.target.value})}/>
                    <br />
                </div>
                <button type="submit" style={{marginLeft:100}}>Sign Up</button>
                <p>already registered?</p>
                <a href="/" style={{textDecoration:"none",marginLeft:100}}>Login</a>
            </form>
          </div>        
        )
    }
}