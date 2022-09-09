import { useEffect } from "react";

const UseEffect = (props) => {
    useEffect(() =>{
        console.log("Behave like Did Mount");
        return () => {
            console.log("Behave like unmount");
        }
    },[])

    useEffect(() =>{
        console.log("Behave like didUpdate ");
    },[props.fname, props.lname])

    return(
        <div>
            Use Effect
            {/* <input type='text' value={props.lname} onChange={(e) => props.setLastName(e.target.value)} /> */}
        </div>
    )
}

export default UseEffect;