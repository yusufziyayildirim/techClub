import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';

const Scroll = (props) => {
    const [scroll, setScroll] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setScroll(true)}>
            {scroll && ( props.children )}
        </ScrollTrigger >
    )
}

export default Scroll