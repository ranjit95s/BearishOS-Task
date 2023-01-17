import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/style.css';
import {FirstConnect} from '../components/FirstConnect'
import {AlphaAccess} from '../components/AlphaAccess'
import {TicklingtheBackendGmail} from '../components/TicklingtheBackendGmail'
import {TicklingtheBackendLook} from '../components/TicklingtheBackendLook'
import {SuccessGmail} from '../components/SuccessGmail'
import {SuccessLook} from '../components/SuccessLook'
import {EmbarrassingGmail} from '../components/EmbarrassingGmail'
import {EmbarrassingLook} from '../components/EmbarrassingLook'
import {EnterName} from '../components/EnterName'

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