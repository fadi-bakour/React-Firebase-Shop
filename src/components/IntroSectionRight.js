import React from 'react'
import Image from '../assets/services/header.png'

function IntroSectionRight() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <h3>Where does it come from?</h3>
                    <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="col-md-6 text-center">
                    <img src={Image} className="mw100 mh300"/>
                </div>
            </div>
        </div>
    )
}

export default IntroSectionRight
