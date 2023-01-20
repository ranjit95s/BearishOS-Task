import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import ConnectAccount_C from '../components/Calendar_Center/ConnectAccount_C'
import TicklingBGC from '../components/Calendar_Center/TicklingBGC'
import TicklingBMC from '../components/Calendar_Center/TicklingBMC'
import SuccessGC from '../components/Calendar_Center/SuccessGC'
import SuccessMC from '../components/Calendar_Center/SuccessMC'
import EmbarrassingGC from '../components/Calendar_Center/EmbarrassingGC'
import EmbarrassingMC from '../components/Calendar_Center/EmbarrassingMC'
import EnterName from '../components/Calendar_Center/EnterName'
import SuccessName from '../components/Calendar_Center/SuccessName'

function CalendarComp() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <ConnectAccount_C/>
            <TicklingBGC/>
            <SuccessGC/>
            <EmbarrassingGC/>
            <EnterName/>
            <TicklingBMC/>
            <EmbarrassingMC/>
            <SuccessMC/>
            <SuccessName/>
        </div>
    )
}

export default CalendarComp