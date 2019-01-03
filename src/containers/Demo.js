import React, {Component} from 'react';

export default class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskList: ['a', 'b'],
            taskName: "",
            subject: ""
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    // formSubmit = () => {
    formSubmit(e){
        e.preventDefault();
        // var input = document.getElementsByTagName('input')[0];
        let {taskName,taskList} = this.state;
        taskList.push(taskName);
        this.setState({
            taskList,
            taskName:''
        });
    }
    changeHandler(e){
        console.log("Event",e.target.name,e.target.value);
        let state = this.state;
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        state[fieldName] = fieldValue;
        this.setState(state);
    }
    render(){
        var style={
          marginTop: '20px'
        };

        return(
            <div>
                <h2>To-do List</h2>
                <button>Create Task</button>
                <form style={style}>
                    <input type={"text"} name={'taskName'} className={""} placeholder={"Enter Task Subject"} value={this.state['taskName']} onChange={(e)=> this.changeHandler(e)}/>
                    <input type={"text"} name={'subject'} className={""} placeholder={"Enter Timing"} value={this.state['subject']} onChange={(e)=> this.changeHandler(e)}/>
                    {/*<input type={"text"} className={""} placeholder={"Enter Description"}/>*/}
                    <button type={"submit"} onClick={(e)=>this.formSubmit(e)}>Submit</button>
                    {this.state.taskList.map((data, i) => {
                        return <div><h1 className="font" key={i}>{data}</h1></div>

                    })}
                </form>
            </div>
        );
    }
}