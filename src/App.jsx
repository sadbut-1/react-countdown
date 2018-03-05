import React, { Component } from 'react'
import Clock from './Clock'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018',
            newDeadLine: ''
        }
    }

    changeDeadLine() {
        this.setState({deadline: this.state.newDeadLine})
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <div>
                    <input placeholder="Nova data" 
                    onChange={event => this.setState({newDeadLine: event.target.value})}/>
                    <button onClick={() => this.changeDeadLine()}>Enviar</button>
                </div>
            </div>
        )
    }
}

export default App;