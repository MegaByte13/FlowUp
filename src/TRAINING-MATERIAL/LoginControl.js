import React from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class LoginControl extends React.Component{

constructor(props){
    super(props);
    this.state={isLoggenIn: false}
    this.handleLoginClick=this.handleLoginClick.bind(this)
    this.handleLogoutClick=this.handleLogoutClick.bind(this)
}

handleLogoutClick(){
    this.setState({isLoggenIn: false})
}
handleLoginClick(){
    this.setState({isLoggenIn: true})
}

render(){
    const isLoggedIn=this.state.isLoggenIn
    let button;
    if(isLoggedIn){
        button=<LogoutButton onClick={this.handleLogoutClick} />
    }else{
        button=<LoginButton onClick={this.handleLogoutClick} />
    }
    return (<div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
    </div>)
}




}

export default LoginControl