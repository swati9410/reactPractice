import React, { Component } from 'react';
import State from './State';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskList: [],
            description: ''
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/config.json').
        then((Response) => Response.json()).
        then((findresponse) => {
            console.log(findresponse.tasks);
            this.setState({
                taskList: findresponse.tasks
            })
        })
    }
    _onChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    _onSubmit(){
        const {description} = this.state;
        if(description != ''){
            this.setState({ taskList: [ ...this.state.taskList,  {"description": description} ] })
            document.getElementsByClassName('errorMsg')[0].innerHTML = '';
        }
        else{
            document.getElementsByClassName('errorMsg')[0].innerHTML = 'Enter description';
        }
    }

    _onDelete(e,key){
        var array = this.state.taskList;
        array.splice(key, 1);
        this.setState({
            taskList: array
        })
        console.log(array);
    }

    _taskOnChange(key){
        const tasklist = this.state.taskList;
        console.log(tasklist[key]);
        console.log(tasklist);
    }

    _onEdit(e,key){
        document.getElementsByClassName('taskDescription')[key].removeAttribute("disabled");
    }

    render() {
        const {taskList} = this.state;
        return (
            <div>
                {/* {
                    taskList.map((data,key) => 
                        <p className={"taskCard"}>
                            <input id={"taskDescription"} placeholder="Enter task" value={data.description} className={"taskDescription"} disabled/>
                            <span id={"editTask"}  onClick={(e) => this._onEdit(e,key)}>Edit</span>
                            <span id={"deleteTask"}  onClick={(e) => this._onDelete(e,key)}>Delete</span>
                        </p>
                    )
                } */}
                {/* <input name={"_id"} type="text" value={this.state.id} placeholder={"Enter Id"}onChange={(e) => this._onChange(e)}/> */}
                {/* <input name={"description"} type="text" value={this.state.description} placeholder={"Enter Description"} onChange={(e) => this._onChange(e)}/>
                <button type="submit" onClick={(e) => this._onSubmit(e)}>Submit</button>
                <span style={{color:"red"}} className={"errorMsg"}></span> */}
                <State/>
            </div>
        )
    }
}





// import React, { Component } from 'react';

// const icons = ["images/1.svg","images/2.svg","images/1.svg","images/2.svg","images/1.svg"];

// export default class App extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             data: [],
//             dataHeading: ''
//         }
//     }
//     componentDidMount() {
//         fetch('http://facebook.github.io/react-native/movies.json').
//         then((Response) => Response.json()).
//         then((findresponse) => {
//             console.log(findresponse.movies);
//             this.setState({
//                 data: findresponse.movies,
//                 dataHeading: findresponse
//             })
//         })
//     }

//     render() {
        

//         return (
//             <div>
//                 <h2>{this.state.dataHeading.title}</h2>
//                 <p>{this.state.dataHeading.description}</p>
//                {
//                    this.state.data.map((dynamicData, key) =>
//                     <ul>
//                         <li>
//                             <img src={icons[key]} key={key}/>
//                             <span>{dynamicData.title}</span>
//                             -<span>{dynamicData.releaseYear}</span>
//                         </li>
//                     </ul> 
//                 )
//                }
//             </div>
//         )
//     }
// }



// import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import { browserHistory,Link } from 'react-router';
// import { isEqual, isEmpty } from 'lodash/lang';


// export default class App extends Component {
//     componentWillMount() {

//     }

//     render() {
//         const childrenWithProps = React.Children.map(this.props.children, (child) => {
//             return React.cloneElement(child, {
//                 location
//             });
//         });

//         return (
//             <div>
//                 {childrenWithProps}
//             </div>
//         )
//     }
// }







