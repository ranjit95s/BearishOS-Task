import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import CalendarEventRemindar from '../components/CalendarComp3/CalendarEventRemindar'



function CalendarComp3() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <CalendarEventRemindar/>
        </div>
    )
}

export default CalendarComp3