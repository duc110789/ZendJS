import React, { Component } from 'react';
import Title from './component/Title';
import Control from './component/Control';
import Form from './component/Form';
import List from './component/List';

class App extends Component {
    render() {
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
                <List />
                {/* LIST : END */}
            </div>
        );
    }
}

export default App;

