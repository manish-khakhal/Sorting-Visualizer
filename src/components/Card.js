import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
    const {sort_image,sort_type,best_tc,avg_tc,link}=props;
    return (<>
        <div className="w3-half">
            <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
                <h3 style={{marginTop: "10px !important"}}>{sort_type}</h3>
                <br />
                <img src={sort_image} height="200px" width="400px" />
                {/* <p>Efficient for smaller datasets</p>
                <p>Effective for partially sorted array</p> */}
                <p>Best time Complexity is {best_tc}</p>
                <p>Average and Worst time complexity is {avg_tc}</p>
                <p><Link to={link}><button className="w3-button w3-theme">Click Here to Get Started</button></Link></p>
            </div>
        </div>
    </>);
}

export default Card;