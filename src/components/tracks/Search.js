import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../context'

export default class Search extends Component {
    state ={ track: ''
    };

    findTracks =(dispatch, e) => {
        e.preventDefault();
        
        axios
        .get(
            `https://api.happi.dev/v1/music?q=${this.state.track}&limit=50&apikey=${process.env.REACT_APP_MM_KEY}`
            )
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.result
                });
            })
            .catch(err => console.log(err));
    }     
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
        
    }
    render() {
        return (
           <Consumer>
           {value => {
               const { dispatch } = value;
               
               return (
                    <div className="card card-body mb-4 p-4"> 
                        <h2 className="display-4 text-center">
                        <i className="fa fa-search"> </i> Search for Song Lyrics
                    </h2>
                    <p className="lead text-center">Get the Track Info and Lyrics to Songs by Keyword!</p>
                    <form onSubmit={this.findTracks.bind(this,dispatch)}>
                        <div className="form-group">
                            <input type='text' 
                            className="form-control form-control-lg" 
                            placeholder="Search for song by keywords ..."
                            name="track"
                            value={this.state.track}
                            onChange={this.onChange}
                            />
                        </div>   
                        <button className="btn btn-warning btn-lg btn-block mb-5">Search</button> 
                    </form>
                
                </div>
               );
           }}
           </Consumer>
        )
    }
}
