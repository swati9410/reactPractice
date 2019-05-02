import React, {Component} from 'react';

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            stateValue: [],
            stateSelected: "",
            selectedDistricts: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/state.json').
        then((Response) => Response.json()).
        then((findresponse) => {
            console.log(findresponse.states);
            this.setState({
                stateValue: findresponse.states
            })
        })
    }
    _onChange(e){
        var sel = [];
        this.state.stateValue.forEach((item, index) => {
            if(item.state == e.target.value) {
                sel = item.districts
            }
        })
        this.setState({
            stateSelected: e.target.value,
            selectedDistricts: sel
        })


    }
    render(){
        const {stateValue, selectedDistricts} = this.state;
     
        return (
            <form>
                <div>
                    <select  onChange={(e) => this._onChange(e)}>
                        <option value="">Select State</option>
                        {stateValue.map((data,key) => {
                                return <option value={data.state} key={key}>{data.state}</option>
                            })
                        } 
                    </select>
                    <select>
                        <option value="">Select District</option>
                        {selectedDistricts.map((data,key) => {
                                return <option key={key}>{data}</option>
                            })
                        } 
                    </select>
                </div>
            </form>
        )
    }
}