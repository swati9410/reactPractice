import React, {Component} from 'react';
import LifeCycleDemo from './LifeCycleDemo'

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log('Rani sa ka instance generate ho rha h')
        this.state = {
            rani : "Shradha"
        };
        this.changeRanisa = this.changeRanisa.bind(this);
    }

    componentWillMount() {
        console.log("Rani SA Aa rhi ");
    }
    componentDidMount() {
        console.log("Rani SA Padhar chuki hain ");
    }
    componentWillUpdate(nextState) {
        console.log("Rani SA fir se aane wali hain",this.state);
    }
    componentWillReceiveProps(nextProps,nextState) {
        
    }
    changeRanisa(e){
        e.preventDefault();
        this.setState({
            rani : 'Gupta ji'
        })
    };
    
    render(){
        console.log("Rani SA Padhar rhi hain",this.state);
        const {rani} = this.state;
        return(
            <div>
                <LifeCycleDemo rani={rani} changeRanisaa={this.changeRanisa} />
            </div>
        );
    }
}