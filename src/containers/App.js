import React, { Component } from 'react';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    _handleEmail(text){
        this.setState({
            email: text.target.value
        })
    }
    _handlePassword(text){
        this.setState({
            password: text.target.value
        })
    }

    render() {
        

        return (
            <div>
                <input type="email" onChange={(text) => _this.handleEmail(text)}/>
                <input type="password" onChange={(text) => _this.handlePassword(text)}/>
                <button>Login</button>
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







