import React, {useState, useContext} from 'react';
import UseEffect from './UseEffect';

const UseState = () =>{
    const [fname, setFname] = useState('');
    const [lname, setLastName] = useState('');
    return(
        <div>
             <input type='text' value={fname} onChange={(e) => setFname(e.target.value)} />
             <input type='text' value={lname} onChange={(e) => setLastName(e.target.value)} />
           { fname && <UseEffect fname={fname} lname={lname}/> }
        <div>Use State Component {fname}</div>
        </div>
        
    )
}

export default UseState;