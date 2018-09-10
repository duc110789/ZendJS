import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import Add from './Add';

class Control extends Component {
    render() {
        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search />
                {/* SEARCH : END */}    
                {/* SORT : START */}
                <Sort />
                {/* SORT : END */}
                {/* ADD : START */}
                <Add />
                {/* ADD : END */}
            </div>
        );
    }
}
export default Control;
