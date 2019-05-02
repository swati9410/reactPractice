import React, {Component} from 'react';

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <form>
                <div>
                    <label>Select State</label>
                    <select>
                        <option>Select State</option>
                        <option>abc</option>
                    </select>
                </div>
            </form>
        )
    }
}