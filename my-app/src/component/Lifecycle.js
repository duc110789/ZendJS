import React, { Component } from 'react';
import $ from 'jquery';

class Lifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title : "Lifecycle"
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        console.log("constructor");
    }
    
    handleChangeTitle = () => {
        this.setState({
            title: "LifecycleComponent - LifecycleWillMount"
        })
    }
    componentWillMount = () => {
        console.log("componentWillMount");
    }
    componentDidMount= () => {
        console.log("componentDidMount");
        $('h3.panel-title').css('color', 'white');
    }
    componentDidUpdate = () => {
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("shouldComponentUpdate");
        return false;
    }
    componentWillUnmount = () => {
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render");
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.state.title}</h3>
                    </div>
                    <div className="panel-body">
                        <p><button className="btn btn-success" type="button" onClick={this.handleChangeTitle}>Change Title</button></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Lifecycle;
