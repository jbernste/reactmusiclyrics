import React from 'react';
import { Link }  from 'react-router-dom';

const Track = (props) => {
    const { track } = props;
    
        return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className ="card-body">
                    <p className="card-text">
                    
                   
                    <i className="fa fa-play"></i><strong> Track: "{track}"</strong></p> 
                    <p><i className="fa fa-music"></i><strong> Artist:</strong>  {props.artist}
                    
                    </p>
                    
                    <img src={props.cover} width='150' alt='album cover'></img>
                    <p></p>
                    <p><i className="fa fa-stop"></i><strong> Album:</strong> {props.album}</p>

                   <Link to={`artists/${props.id_artist}/albums/${props.id_album}/tracks/${props.id}/lyrics`}
                   className="btn btn-primary btn-block"> View Lyrics</Link>
                </div>
            </div>
            
        </div>
    )
}
export default Track;