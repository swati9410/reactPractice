import React, { Component } from 'react';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            previousTask: [],
            _id: '', 
            description: '',
            status: '',
            newTasks: [],
            finalTask: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/config.json').
        then((Response) => Response.json()).
        then((findresponse) => {
            console.log(findresponse.tasks);
            this.setState({
                previousTask: findresponse.tasks
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
        const {_id, description, status} = this.state;
        this.setState({ newTasks: [ ...this.state.newTasks,  {"_id": _id , "description": description , "status": status} ] })
        var final = this.state.previousTask.concat(this.state.newTasks)
        this.setState({
            finalTask: final
        })
        // console.log(this.state.task)
        // this.state.previousTask.id = this.state.task;
        // tasks['_id'] = '3';
        // console.log("new key: " + tasks);
    }

    render() {

        const {previousTask} = this.state;
        return (
            <div>
                {
                    previousTask.map((data,key) => 
                        <ul>
                            <li key={key}>{data.description}</li>
                        </ul>
                    )
                }
                <input name={"_id"} type="text" value={this.state.id} placeholder={"Enter Id"}onChange={(e) => this._onChange(e)}/>
                <input name={"description"} type="text" value={this.state.description} placeholder={"Enter Description"} onChange={(e) => this._onChange(e)}/>
                <input name={"status"} type="text" value={this.state.status} placeholder={"Enter Status"} onChange={(e) => this._onChange(e)}/>
                 <button type="submit" onClick={(e) => this._onSubmit(e)}>Submit</button>


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







