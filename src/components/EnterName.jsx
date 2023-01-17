import React from 'react'
import Close   from './img/Close.png';
export const EnterName = () => {
  return (
    <div> <div style={{"height":"200px"}} className="boxStyle">
    <div className="inStyle">
        <div className="headerStyle textLStyle">
            <div className="headerin">
                Enter Email
            </div>
            <img src={Close} alt="email" />
        </div>
        <div className="signSec">
            <div className="signIn NickStyle inputStyle textSStyle">
                <input type="text" placeholder='Nickname' name="code" id="code" />
            </div>
            <div className="btns">
                <div className="btnIn ref">
                    <button>
                        <span>Refresh</span>
                    </button>
                </div>
                <div className="btnIn out">
                    <button>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}
