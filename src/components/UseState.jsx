import React, {useState, useContext} from 'react';
import UseEffect from './UseEffect';

const UseState = () =>{
    const [fname, setFname] = useState('');
    const [lname, setLastName] = useState('');
    return(
        <div>
             <input type='text' value={fname} onChange={(e) => setFname(e.target.value)} />
           { fname && <UseEffect fname={fname} handleUpdate={setFname} lname={lname} setLastName={setLastName}/> }
        <div>Use State Component {fname}</div>
        </div>
        
    )
}

export default UseState;