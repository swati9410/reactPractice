import React, {Component} from 'react';

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            stateValue: [],
            stateSelected: "",
            selectedDistricts: [],
            districtSelected: "",
            selectedTehsils: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/state.json').
        then((Response) => Response.json()).
        then((findresponse) => {
            // console.log(findresponse.states);
            this.setState({
                stateValue: findresponse.states
            })
        })
    }
    _onStateChange(e){
        var sel = [];
        this.state.stateValue.forEach((item, index) => {
            if(item.state == e.target.value) {
                Object.keys(item.districts).forEach((item, index) => {
                    sel.push(item);
                })
            }
        })
        this.setState({
            stateSelected: e.target.value,
            selectedDistricts: sel
        })
    }
    _onDistrictChange(e){
        var sel = [];
        this.state.stateValue.forEach((item, index) => {
            // console.log(item)
            Object.entries(item.districts).forEach((item1, index) => {
                if(item1[0] == e.target.value) {
                    console.log(item1[1]);
                    Object.values(item1[1]).forEach((item2, index) => {
                        sel = item2;
                    });
                }
            });
            // Object.item.forEach((item, index) => {
            // 
               
            //         console.log(item)
            // }
            //     })
            
        })
        this.setState({
            districtSelected: e.target.value,
            selectedTehsils: sel
        })
    }
    render(){
        const {stateValue, selectedDistricts,selectedTehsils} = this.state;
     
        return (
            <form>
                <div>
                    <select onChange={(e) => this._onStateChange(e)}>
                        <option value="">Select State</option>
                        {stateValue.map((data,key) => {
                                return <option value={data.state} key={key}>{data.state}</option>
                            })
                        } 
                    </select>
                    <select onChange={(e) => this._onDistrictChange(e)}>
                        <option value="">Select District</option>
                        {selectedDistricts.map((data,key) => {
                                return <option value={data} key={key}>{data}</option>
                            })
                        } 
                    </select>
                    <select>
                        <option value="">Select Tehsil</option>
                        {selectedTehsils.map((data,key) => {
                                return <option key={key}>{data}</option>
                            })
                        } 
                    </select>
                </div>
            </form>
        )
    }
}