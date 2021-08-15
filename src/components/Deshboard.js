import React, {useEffect, useState } from 'react'
import Board from './Board';

function Deshboard(props) {
    
    const { sort_type, sort,showArray,setshowArray} = props;
    const [inputArray, setinputArray] = useState("");
    
    useEffect(() => {

    }, [showArray]);

    return (
        <>
            <div id="contain">
                <h2 id="heading" style={{ textTransform: "uppercase" }}>{sort_type}</h2>
                <div id="bod"><Board arr={showArray}/></div>
                <div>
                    <div id="buttons">
                        <input id="array" type="text" value={inputArray} onChange={(e) => { setinputArray(e.target.value) }} placeholder="Enter array seperated by space" size="30" />
                        <button id="submit" className="btn-primary btn-default" onClick={() => {
                            // document.getElementById("submit").disabled = true;
                            //store space seperated string in array of numbers
                            let unsortedArray = inputArray.split(" ").map(Number);
                            setshowArray(unsortedArray);
                        }}>Submit</button>
                        <button className="btn-default " onClick={() => { sort(showArray) }} >{sort_type}</button>
                        <button className="btn-default" style={{ marginLeft: "40px" }}>Stop</button>
                        <button className="btn-default" >Resume</button>
                        <button className="btn-default">Reset</button>
                        <button className="btn-deafault btn-danger" >Clear</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Deshboard;
