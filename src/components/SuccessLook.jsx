import React from 'react'
import Close   from './img/Close.png';
import sem   from './img/sem.png';
export const SuccessLook = () => {
  return (
    <div><div style={{"height":"200px"}} className="boxStyle">
    <div className="inStyle">
        <div className="headerStyle textLStyle">
            <div className="headerin">
            Success
            </div>
            <img src={Close} alt="email" />
        </div>
        <div className="signSec">
            <button className="signIn textSStyle">
                <img src={sem} alt="email" />
                <div  className="inText">
                Microsoft Outlook
                </div>
            </button>
            <div className="info">
                {/* text-size not reducing below 11px */}
                This page should automatically redirect for you to login to Microsoft Outlook.
            </div>
            
        </div>
    </div>
</div></div>
  )
}
