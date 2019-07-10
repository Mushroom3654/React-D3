import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import D3Bar from "./components/d3-bar";
import StackedBar from "./components/stacked-bar";



class App extends  Component{
    state = {
        data : [12,5,6,6,9,10],
        width:700,
        height:300,
    };

    render() {
        return (
            <Fragment>
                <div className="App">
                    <D3Bar data={this.state.data} width={this.state.width}
                    height={this.state.height}/>
                </div>
                <div>
                    <StackedBar/>
                </div>
            </Fragment>
        );
    }
}

export default App;
