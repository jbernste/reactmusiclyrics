import React from 'react'
import spinner from './spinner.gif';
import {Link} from 'react-router-dom';

const Spinner = () => {
    return (
        <div>
        <br />
        <h3> Lyrics May Not Be Available for this track!</h3>
        <br /><p><Link to="/" className="btn btn-dark btn-lg mb-4" >Go Back</Link></p>
        
       
        
            
            <img
                src={spinner}
                alt= "loading ..."
                style = {{ width:'400px', margin: '40px auto', display: 'block '}}
            />
            
        </div>
    )
}
export default Spinner; 