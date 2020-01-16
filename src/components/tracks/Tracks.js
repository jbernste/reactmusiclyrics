import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from '../tracks/Track';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
            {value => {
                const { result, heading } = value;
                if(result === undefined || result.length === 0) {
                    return <Spinner />;

                } else {
                    return (
                        <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>
                        <div className="row">
                            {result.map(item => (
                                <Track key = {item.id_track} id={item.id_track} nlyrics={item.haslyrics} id_album={item.id_album} id_artist={item.id_artist} track={item.track} album={item.album} artist={item.artist} cover={item.cover} lyrics={item.api_lyrics} />
                                
                        ))}
                        </div>
                        </React.Fragment>
                    ); 
                }
            }}
            </Consumer>
        );
    }
}
export default Tracks;