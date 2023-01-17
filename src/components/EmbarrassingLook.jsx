import React from 'react'
import Close   from './img/Close.png';
import sol   from './img/sol.png';
export const EmbarrassingLook = () => {
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
                <img src={sol} alt="email" />
                <div  className="inText">
                Microsoft Outlook
                </div>
            </button>
            <div className="info">
                {/* text-size not reducing below 11px */}
                Your intelligent connection to Microsoft Outlook failed. Please press connect and try to connect your account again. Need help? Submit a ticket below.
            </div>
            <div className="submitT textSStyle">
                <span> Submit a Ticket </span>
            </div>
        </div>
    </div>
</div></div>
  )
}

