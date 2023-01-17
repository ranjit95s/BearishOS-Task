import React from 'react'
import Close   from './img/Close.png';
import sem   from './img/sem.png';
export const EmbarrassingGmail = () => {
  return (
    <div><div style={{"height":"250px"}} className="boxStyle">
    <div className="inStyle">
        <div className="headerStyle textLStyle">
            <div className="headerin">
            Well this is Embarrassing
            </div>
            <img src={Close} alt="email" />
        </div>
        <div className="signSec">
            <button className="signIn textSStyle">
                <img src={sem} alt="email" />
                <div  className="inText">
                Google Gmail
                </div>
            </button>
            <div className="info">
                {/* text-size not reducing below 11px */}
                Your intelligent connection to Google Gmail failed. Please press connect and try to connect your account again. Need help? Submit a ticket below.
            </div>
            <div className="submitT textSStyle">
                <span> Submit a Ticket </span>
            </div>
        </div>
    </div>
</div></div>
  )
}

