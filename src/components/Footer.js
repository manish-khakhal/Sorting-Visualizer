import React from 'react'

function Footer() {
    return (<>
        <footer className="w3-container w3-theme-dark w3-padding-16">
            <h3>Made by Prakash Dhayal</h3>
            <h4>Software Engineering Project</h4>
            <p>Contact Me: <a href="https://www.linkedin.com" target="_blank">LinkedIn</a></p>
            <div style={{position:"relative;bottom:55px"}} className="w3-tooltip w3-right">
                <span className="w3-text w3-theme-light w3-padding">Go To Top</span>
                <a className="w3-text-white" href="#myHeader"><span className="w3-xlarge">
                    <i className="fa fa-chevron-circle-up"></i></span></a>
            </div>
        </footer>
    </>);
}

export default Footer;