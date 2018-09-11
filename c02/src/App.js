import React, { Component } from 'react';
import Title from './component/Title';
import Control from './component/Control';
import Form from './component/Form';
import List from './component/List';

class App extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            items: [
                {
                    Name: 'ABC',
                    Level: 0 // 0 Small, 1 Medium, 2 High
                },
                {
                    Name: 'DEF',
                    Level: 1 // 0 Small, 1 Medium, 2 High
                },
                {
                    Name: 'GHJ',
                    Level: 2 // 0 Small, 1 Medium, 2 High
                }
            ]
        }
    }
    render() {
        let items = this.state.items;
        return (
            <div>
                {/* TITLE : START */}
                <Title />
                {/* TITLE : END */}
                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}
                {/* FORM : START */}
                <Form />
                {/* FORM : END */}
                {/* LIST : START */}
                <List items = {items}/>
                {/* LIST : END */}
            </div>
        );
    }
}

export default App;

