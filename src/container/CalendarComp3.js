import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import CalendarEventRemindar from '../components/CalendarComp3/CalendarEventRemindar'
import CalendarEventRemindar2 from '../components/CalendarComp3/CalendarEventRemindar2'



function CalendarComp3() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <CalendarEventRemindar/>
            <CalendarEventRemindar2/>
        </div>
    )
}

export default CalendarComp3