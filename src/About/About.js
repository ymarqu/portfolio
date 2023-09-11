import React, { Component } from "react";
import my_pic from './pfp.jpeg';

class About extends Component{

    render(){

        return(
            <div className="cover h-75 w-75 center flex justify-center items-center bg-white tc">
               <div>
                <h2>
                    About Me
                </h2>
                <p>
                Detail-oriented and adaptable professional with a strong background in operations and a passion for web development. As an Operations Assistant at San Diego Gas and Electric, I honed my data management skills and maintained corporate reporting dashboards. My experience as a Recruiting Coordinator at Amazon further strengthened my organizational and problem-solving abilities. With a Bachelor's degree in Computer Science and proficiency in HTML, CSS, Python, and JavaScript, I am eager to transition into an entry-level web developer role, bringing my technical skills and dedication to delivering exceptional results to your team.
                </p>
                </div>
                <img className="h-auto" src={my_pic} alt="Yesenia Marquina Headshot"/>

            </div>
        )
    }
}

export default About;
