import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={isToggleOn: true}
        this.handleClick=this.handleClick.bind(this)
    }

    form(e){
        e.preventDefault();
        console.log('Form been sent!');
    }
    handleClick(){
        
        this.setState(prevState=>({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.form}>
                    <button type="submit">Click me to Send form</button>
                </form>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
            </div>
        )
    }

}

export default Form