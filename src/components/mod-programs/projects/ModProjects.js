import React from "react";
import { Card, Nav, Image } from "react-bootstrap";
import "./ModProjects.css";
//This is the card card of Project Workshops

const ModProjects = () => {

    return (
    <>
        <Card>
            <Card.Title className="text-center title">Projects</Card.Title>
            <Card.Body>
                <div>Join our semester-long workshop to enhance your coding skills through a hands-on project and expert guidance from our ACM leaders. 
                    Perfect for students eager to advance their practical programming abilities while adding to their resume.
                    
                </div>
                
                <div className = "figureContainer">
                    {/*placeholder for images of past project posters*/}
                    <Image src = {require("./photos/game_of_life_poster.png")} rounded/>
                    <Image src = {require("./photos/space_invaders_poster.png")} rounded/>                    
                    <Image src = {require("./photos/wordle_poster.png")} rounded/>
                    
                    
                </div>

                {/*Not sure what I'm supposed to link to  */}
                <div className = "link">
                    <Nav.Link href = "./projects/CurrentProjects"><Image src = {require("./photos/link.png")}></Image>See what we're doing this semester!</Nav.Link>
                </div>
                


            </Card.Body>

        </Card>
    
    </>)
}

export default ModProjects