import React from 'react'
import Close   from './img/Close.png';
import sem   from './img/sem.png';
export const AlphaAccess = () => {
  return (
    <div> <div className="boxStyle">
    <div className="inStyle">
        <div className="headerStyle textLStyle">
            <div className="headerin">
            Alpha Access
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
            Our Intelligent Connection connecting Google Gmail and Bearish OS is currently in Alpha Access only. If you think you should have access contact, your admin. You will be automatically redirected if your alpha access code is correct.
            </div>
            <div className="signIn inputStyle textSStyle">
                <input type="text" placeholder='Enter Alpha Access Code' name="code" id="code" />
            </div>
        </div>
    </div>
</div></div>
  )
}

