import { React, useState } from "react"
import { AppTitle } from "./MiniParts.jsx"

const Section = (props) => {
    return (
        <div className={`app__section ${props.extraClass}`}>
            <div className="title">
                <AppTitle text={props.title} icon={props.icon}/>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Section