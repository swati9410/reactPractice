import React, {Component} from 'react';
export default class LifeCyclePracticeDemo extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentWillReceiveProps(nextProps){
        debugger;
        console.log('demo component will receive props', nextProps,this.props);
    }
    render(){
        return(
            <div>
                {this.props.new}
            </div>
        );
    }
}