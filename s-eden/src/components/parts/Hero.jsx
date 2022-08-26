import { React, useState } from "react";
import { AppButton } from "../includes/MiniParts.jsx"
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import HeroArt  from "../../assets/images/hero-art.png"
import AppConfig from "../includes/AppConfig.jsx";

const Hero = () => {
    const HeroData = AppConfig.hero

    return (
        <div className="app__hero">
            <div className="left">
                <div className="hero-text">
                    <h2 className="title">
                        {HeroData.title}
                    </h2>

                    <p className="description">
                        {HeroData.description}
                    </p>

                    <div className="action">
                        <AppButton url={ AppConfig.socials.whatsapp.url }>
                            Send a Message
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