import React, {Component} from 'react';
import LifeCyclePracticeDemo from './LifeCyclePracticeDemo';

export default class LifeCyclePractice extends Component{
    constructor(props){
        super(props);
        console.log('Welcome to React!!');
        this.state = {
            new: 'abc'
        }
        this.onClickChange = this.onClickChange.bind(this);
    }
    onClickChange(e){
        e.preventDefault();
        this.setState({
            new: 'xyz'
        });
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate');
    // }
    componentwillupdate(nextState){
        console.log('componentwillupdate',this.state);
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render(){
        console.log('Render');
        return(
            <div>
                <button type="submit" onClick={(e)=>this.onClickChange(e)}>jshjahsj</button>
                <LifeCyclePracticeDemo new={this.state.new} clickChange={this.onClickChange}/>
            </div>
        );
    }
}