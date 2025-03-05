import React from "react";
//Создаём конструктор компонента

//Создаём класс-компонент
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state=({count: 0, date: new Date()})
    }
    //Создаём функцию, которая будет прибавлять к нашему текущему состоянию единицу
    increment=()=>{
        this.setState({count: this.state.count+1})
    }

    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({date: new Date()})
    }
    render(){
        return (
            <div>
                <h1>Our counter: {this.state.count}</h1>
                <h2>Time is: {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }

}



export default Counter