import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import FirstConnect from '../components/FirstConnect'
import AlphaAccess from '../components/Gmail/AlphaAccess'
import TicklingtheBackendGmail from '../components/Gmail/TicklingtheBackendGmail'
import TicklingtheBackendLook from '../components/MicroLook/TicklingtheBackendLook'
import SuccessGmail from '../components/Gmail/SuccessGmail'
import SuccessLook from '../components/MicroLook/SuccessLook'
import EmbarrassingGmail from '../components/Gmail/EmbarrassingGmail'
import EmbarrassingLook from '../components/MicroLook/EmbarrassingLook'
import EnterName from '../components/Gmail/EnterName'

function EmailComp() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <FirstConnect/>
             <AlphaAccess/>
            <TicklingtheBackendGmail/>
            <SuccessGmail/>
            <EmbarrassingGmail/>
            <EnterName/>
            <TicklingtheBackendLook/>
            <EmbarrassingLook/>
            <SuccessLook/>
        </div>
    )
}

export default EmailComp