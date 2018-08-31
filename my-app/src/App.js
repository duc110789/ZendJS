import React, { Component } from 'react';
import Course from'./component/Course';

class App extends Component {
    render() {
        const items = [
            {
                name: 'ReactJS',
                time: '40h',
                free: false,
                desc: 'ReactJS is very simple'
            },
            {
                name: 'AngularJS',
                time: '50h',
                free: true
            },
            {
                name: 'NodeJS',
                time: '60h',
                free: true
            }
        ];
        const elmCourses = items.map((item, index) =>
            <Course key={index} name={item.name} time={item.time} free={item.free} desc="ReactJS is very simple"/>
        );
        return (
            <div className="row">
                {elmCourses}
            </div>
        );
    }
}

export default App;

