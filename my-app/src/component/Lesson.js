import React, { Component } from 'react';

class Lesson extends Component {
    render() {
        return React.createElement('li', {className: 'list-group-item'}, 'Item1');
    }
}
export default Lesson;
