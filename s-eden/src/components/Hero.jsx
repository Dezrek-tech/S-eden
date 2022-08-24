import { React, useState } from "react";
import { AppButton } from "./MiniParts.jsx"
import  HeroArt  from "../assets/images/hero-art.png"
import { ChatBubbleBottomCenterIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'

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
                            <div className="icon">
                                <ChatBubbleBottomCenterTextIcon />
                            </div>
                        </AppButton>
                    </div>

                </div>
            </div>
            <div className="right">
                <div className="hero-art">
                    <img src={HeroArt} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero