import React, { Component } from 'react';
import Lesson from'./Lesson';

class Course extends Component {
    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }

    handleClick1() {
        alert("View1");
    }
    handleClick2(content) {
        alert(content);
    }
    handleClick3() {
        alert(this.props.name);
    }
    handleClick4() {
        alert(this.refs.username.value);
    }

    showButtonFree() {
        const isFree = this.props.free;
        console.log("isFree", isFree);
        if(isFree === true) {
            return <div className="panel-footer">
                        <div className="panel-group">
                            <button onClick={this.handleClick1} type="button" className="btn btn-success">View 1</button>
                            <button onClick= {() => this.handleClick2("View 2")} type="button" className="btn btn-warning">View 2</button>
                            <button onClick={this.handleClick3} type="button" className="btn btn-primary">View 3</button>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.handleClick4}>Go!</button>
                            </span>
                            <input type="text" className="form-control" placeholder="username..." ref="username"/>
                        </div>
                    </div>;
        }
    }
    render() {
        return (
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">{this.props.name}</h3>
                        </div>
                        <div className="panel-body">
                            <p>{this.props.time}</p>
                            <p>{this.props.children}</p>
                            <ul className="list-group">
                                <Lesson />
                                <Lesson />
                                <Lesson />
                            </ul>
                        </div>
                        {this.showButtonFree()}
                    </div>
                </div>
        );
    }
}
export default Course;
