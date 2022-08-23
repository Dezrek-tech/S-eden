import { React, useState } from "react";
import { AppLogo } from "./MiniParts";
import { Bars2Icon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [nav, setNav] = useState("inactive");

    return (
        <nav className={`app__nav ${nav}`}>
            <div className="left flat-centered">
                <AppLogo />
            </div>

            <div className={`right flat-right `}>
                <div className="nav-items flat-centered">
                    <a className="item" href="#">
                        Home
                    </a>
                    <a className="item" href="#">
                        About
                    </a>
                    <a className="item" href="#">
                        Contact
                    </a>
                </div>

                <div className="mobile-nav-controller flat-centered">
                    <div className="open" onClick={() => setNav("active")}>
                        <span className="icon">
                            <Bars2Icon className="icon" />
                        </span>
                    </div>

                    <div className="close" onClick={() => setNav("inactive")}>
                        <span className="icon">
                            <ChevronRightIcon className="icon" />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
