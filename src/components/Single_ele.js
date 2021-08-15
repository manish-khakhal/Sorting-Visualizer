import React from 'react'

function Single_ele({ value, id, color, bgc }) {
    return (<>
        <div style={{
            color: color,
            margin: "10px",
            textAlign: "center",
            fontSize: "1.7rem",
            fontWeight: "bold",
            backgroundColor: bgc,
            height: "40px",
            minWidth: "40px",
            padding: "0 8px"
        }
        }>  {value} </div>
    </>);
}

export default Single_ele;
