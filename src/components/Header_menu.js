import React from 'react'
import { Link } from "react-router-dom";
function Header_main() {
  return (<>
    <div className="w3-bar w3-theme" style={{position: "sticky", top:"0"}}>
        <Link to="/Sorting-Visualizer" className="w3-bar-item w3-button w3-padding-16">Home</Link>
        <Link to="/bubble_sort" className="w3-bar-item w3-button w3-padding-16">Bubble Sort</Link>
        <Link to="/insertion_sort" className="w3-bar-item w3-button w3-padding-16">Insertion Sort</Link>
        <Link to="/about" className="w3-bar-item w3-button w3-padding-16">About Us</Link>
        <Link to="/contact" className="w3-bar-item w3-button w3-padding-16">Contact Us</Link>
    </div>
  </>);
}
export default Header_main;