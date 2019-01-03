import React, {Component} from 'react';

 class LifeCycleDemo extends Component {
    constructor(props){
        super(props);
        console.log("THis",this);
    }

    componentWillReceiveProps(nextProps) {
        console.log("Rani SA fir se aane wali hain",nextProps,this.props);
        debugger;
    }

    
    
    render(){
        console.log("THis Props in Render",this.props);
        debugger;
        return(
            <div>
                Hey, {this.props.rani}
                <button onClick={(e)=> {this.props.changeRanisaa(e)}}>Change Rani</button>
            </div>
        );
    }
}

export default LifeCycleDemo;