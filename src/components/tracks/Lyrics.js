import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

class Lyrics extends Component {
    
    state = {
        result: {},
        lyrics: {}
        
    }



componentDidMount() {
        axios.get(`https://api.happi.dev/v1/music/artists/${this.props.match.params.id_artist}/albums/${this.props.match.params.id_album}/tracks/${this.props.match.params.id}/lyrics?apikey=${process.env.REACT_APP_MM_KEY}`)
           .then(res => {
                console.log(res.data);
                this.setState({lyrics: res.data.lyrics});
            return axios.get(`https://api.happi.dev/v1/music/artists/${this.props.match.params.id_artist}/albums/${this.props.match.params.id_album}/tracks/${this.props.match.params.id}/lyrics?apikey=${process.env.REACT_APP_MM_KEY}`
                );
            })
            .then(res => {
                this.setState({result: res.data.result});
            })
            .catch(err => console.log(err));
    }
    
    render() {

        
        const { result, lyrics } = this.state;
       
        if(result === undefined || Object.keys(result).length === 0) {
            return <Spinner />;
      
         }   else {
            return (
                <React.Fragment>
                <br /><p></p>
                <div className="card">
                    <h5 className="card-header">
                    {result.track} by {' '} <span className="text-secondary">{result.artist}</span>
                    </h5>
                    <div className="card-body">
                       <p className="card-text">{result.lyrics}</p>
                    </div>
                </div>
                <br /><p><Link to="/" className="btn btn-dark btn-lg mb-4" >Go Back</Link></p>
                </React.Fragment>        
            );
        } 
    }
}

export default Lyrics;
