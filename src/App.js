import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import D3Bar from "./components/d3-bar";


class App extends  Component{
    state = {
        data : [12,5,6,6,9,10],
        width:700,
        height:300,
    };

    render() {
        return (
            <div className="App">
                <D3Bar data={this.state.data} width={this.state.width}
                height={this.state.height}/>
            </div>
        );
    }
}

export default App;
