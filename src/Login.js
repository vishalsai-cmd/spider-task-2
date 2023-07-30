import React,{Component} from "react";
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:"",
            password:""
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        const {email,password}=this.state;
        console.log(email,password);
        fetch("http://localhost:8000/login-user",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*", 
            },
            body:JSON.stringify({
                email,
                password
            }),

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userRegister");
            if(data.status == "ok"){
                alert("login successful");
                window.localStorage.setItem("token",data.data);
                window.location.href="./UserDetails";
            }
        })
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <h3>Log in</h3>
                <div>
                    <label>email</label>
                    <input type="email" placeholder="email" style={{borderRadius:0.3}} onChange={(e) =>this.setState({email:e.target.value})} />
                    <br />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" placholder="password" style={{borderRadius:0.3}} onChange={(e) =>this.setState({password:e.target.value})}/>
                    <br />
                </div>
                <button type="submit">log in</button>
            </form>
            <a href="/Signup">Signup</a>
            </div>
        )
    }
}