import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_TRACKS':
            return {
                ...state,
                result: action.payload,
                heading: <p className ="display-5 mb-4"><mark>Top 50 Search Results</mark></p>
            };
        default:
            return state;
        }       
};

export class Provider extends Component {
    state = {
        result : [],
        heading: <p className ="display-5 mb-4"><mark>Top 10 Tracks</mark></p>,
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios.get(`https://api.happi.dev/v1/music?q=williams&limit=10&apikey=${process.env.REACT_APP_MM_KEY}&type=`)
            .then(res => {
                //console.log(res.data);
                this.setState({result: res.data.result});
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={ this.state }>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
