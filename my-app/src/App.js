import React, { Component } from 'react';
import Course from'./component/Course';

class App extends Component {
    render() {
        return (
            <div className="row">
                <Course />
                <Course />
                <Course />
            </div>
        );
    }
}

export default App;

