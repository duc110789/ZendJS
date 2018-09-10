import React, { Component } from 'react';
import Course from'./component/Course';
import Lifecycle from'./component/Lifecycle';

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
        let elmCourses = items.map((item, index) =>
            <Course key={index} name={item.name} time={item.time} free={item.free} desc="ReactJS is very simple"/>
        );
        elmCourses = null;
        return (
            <div className="row">
                {elmCourses}
                <Lifecycle />
            </div>
        );
    }
}

export default App;

