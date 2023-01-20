import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import CreateNewMeetingLoad from '../components/VideoCenterOne/CreateNewMeetingLoad'
import CreateNewMeetingGo from '../components/VideoCenterOne/CreateNewMeetingGo'
import ScheduleAMeeting from '../components/VideoCenterOne/ScheduleAMeeting'
import ReacordandTranscribeCall from '../components/VideoCenterOne/ReacordandTranscribeCall'
import JoinMeetingLoad from '../components/VideoCenterOne/JoinMeetingLoad'
import JoinMeetingGo from '../components/VideoCenterOne/JoinMeetingGo'
import WellMeeting from '../components/VideoCenterOne/WellMeeting'
import AskingJoinMeeting from '../components/VideoCenterOne/AskingJoinMeeting'


function VideoCenterOne() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <CreateNewMeetingLoad/>
            <CreateNewMeetingGo/>
            <ScheduleAMeeting/>
            <ReacordandTranscribeCall/>
            <JoinMeetingLoad/>
            <JoinMeetingGo/>
            <WellMeeting/>
            <AskingJoinMeeting/>
        </div>
    )
}

export default VideoCenterOne