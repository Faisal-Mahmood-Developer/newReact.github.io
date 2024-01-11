import React from "react";
import '../../src/index.css'

const Footer=(props)=>{
    return(
        <>
        <footer className={`bg-${props.lastFooter} p-3 text-white text-center w-100`}>
            This is footer
        </footer>
        </>
    )
}

export default Footer;