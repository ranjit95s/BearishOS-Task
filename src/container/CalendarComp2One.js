import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import CalendarWorkSpace from '../components/CalendarComp2One/CalendarWorkSpace'



function CalendarComp2One() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <CalendarWorkSpace/>
        </div>
    )
}

export default CalendarComp2One