import { useState } from "react"
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"

const ScrollToTop = () => {
    const [Hidden, setHidden] = useState('active')

    window.onscroll = () => {
        if(window.scrollY > 420 ) {
            setHidden('active')
        } else {
            setHidden('in-active')
        }
    }

    return (
        <a data-scroll href="#top-anchor" className={`app__to-top ${Hidden}`}>
            <div className="icon">
                <ChevronDoubleUpIcon />
            </div>
        </a>
    )

} 

export default ScrollToTop