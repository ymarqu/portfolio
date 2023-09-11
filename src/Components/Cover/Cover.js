import './cover.css'
import React, { Component } from "react";

class Cover extends Component{

    render(){

        return(
            <div className="cover h-75 w-75 center flex justify-center items-center">
                <div className='tc'>
                <h1 className='ma0 white animate__animated animate__backInLeft'>Hi there! :) </h1>
                <p className='white animate__animated animate__backInRight'>Welcome. My name is Yesenia & I enjoy to code things!</p>
                </div>
                <div>
                    <image></image>
                </div>
            </div>
        )
    }
}

export default Cover;
