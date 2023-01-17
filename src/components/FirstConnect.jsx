import React from 'react'
import Close   from './img/Close.png';
import sem   from './img/sem.png';
import ex   from './img/smallEx.png';
import sol   from './img/sol.png';

export const FirstConnect = () => {

    // let boxStyle = {

    // };
  return (
    <div> <div className="boxStyle">
    <div className="inStyle">
        <div className="headerStyle textLStyle">
            <div className="headerin">
            Connect an Account
            </div>
            <img src={Close} alt="email" />
        </div>
        <div className="signSec">
            <button className="signIn textSStyle">
                <img src={sem} alt="email" />
                <div  className="inText">
                Google Gmail
                <span className="spanStyle"> Alpha </span>
                </div>
            </button>
            <button className="signIn textSStyle">
            <img src={sol} alt="email" />
                <div className="inText">
                Microsoft Outlook
                </div>
            </button>
            <button className="signIn textSStyle">
            <img src={ex} alt="email" />
                <div className="inText">
                Microsoft Exchange
                <span className="spanStyle"> Soon </span>
                </div>
            </button>
        </div>
    </div>
</div>
</div>
  )
}
