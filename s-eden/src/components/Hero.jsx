import { React, useState } from "react";
import { AppButton } from "./MiniParts.jsx"

const Hero = () => {
    return (
        <div className="app__hero">
            <div className="left">
                <div className="hero-text">
                    <h2 className="title">
                        Lorem, ipsum dolor sit amet.
                    </h2>

                    <p className="description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptate, fugit officiis optio nesciunt temporibus alias iure numquam aliquid voluptatum animi atque, possimus velit similique quas eius unde explicabo omnis.
                    </p>

                    <div className="action">
                        <AppButton>
                            Send a message
                        </AppButton>
                    </div>

                </div>
            </div>
            <div className="right">

            </div>
        </div>
    )
}

export default Hero