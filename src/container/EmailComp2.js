import React, { useState } from 'react'
import Close from '../components/img/Close.png'
import attachment from '../components/img/attachment.png'
import LD from '../components/img/LD.png'
import link from '../components/img/link.png'
import remove from '../components/img/remove.png'
import Share from '../components/img/Share.png'
import trash from '../components/img/trash.png'

import "@fontsource/source-serif-pro";
import '../components/style.css'
function EmailComp2() {


    let mainStyle = {
        width: "400px",
        height: "max-content",
        marginTop: "40px",
        marginLeft: "20px",
        background: "rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        borderRadius: "5px",
        opacity: "1",
        font: "normal normal 300 15px/21px Source Serif Pro",
        letterSpacing: "0px",
        color: "rgba(0, 0, 0, 1)",
    };

    let header = {
        background: "rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        border: "3px solid rgba(233, 237, 242, 1)",
        opacity: "1",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "7px",
        marginBottom: "10px",
    };
    let headerContent = {
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        // width: "100%", 
    };
    let headerBody = {
        paddingRight: "10px",
        paddingLeft: "10px",
        width: "100%",
    };
    let composeBody = {
        width: "100%",
        display: "flex",
        marginBottom: "7px",
        paddingBottom: "4px",
    };
    let spanHide = {
        display: "none",
    };
    let borderBStyle = {
        borderBottom: "1px solid #ebebeb",
    };
    let ComposeLower = {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px #00000029",
        border: "3px solid #E9EDF2",
        borderRadius: "5px",
        opacity: "1",
        height: "40px",
    };
    let ComposeBtns = {
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        marginLeft: "12px",
        padding: "1.2px",
    };
    let borderStyle = {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "1px solid #E9EDF2",
        borderRadius: "5px",
        padding: "2px 6px",
        opacity: "1",
    };
    let imgStyle = {
        marginLeft: "12px",
    };

    let hoveroutStyle = {
        position: "relative",
        width: "100%",
    };

    let hoverStyle = {
        position: "absolute",
        fontSize: "11px",
        top: "-45px",
        left: "-48px",
        width: "max-content",
        background: "#F2F5F8",
        padding: "1px",
        zIndex: "10",
        borderRadius: "5px",
    }

    let closeextra = {
        left: "-28px",
    }

    let hoverBody = {
        position: "relative",
    }

    let peek = {
        width: "12px",
        height: "16px",
        background: "#F2F5F8",
        top: "13px",
        zIndex: "-10",
        position: "absolute",
        transform: " rotate(45deg)",
        left: "30px",
    }

    let peekex = {
        left: "10px",
    }

    let comBtn = {
        background: "rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        border: "3px solid rgba(233, 237, 242, 1)",
        opacity: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "14px",
        marginBottom: "10px",
    }
    let btnStyle = {
        // width: "fit-content",
        display: "flex",
        justifyContent: "right",
        alignItems: "end",
        /* align-content: end; */
    }
    let btnStyles = {
        width: "fit-content",
        padding: "6px",
        borderRadius: "5px",
        outline: "none",
        border: "none",
        marginRight: "0",
    };
    let comex = {
        width: "300px",
        left: "-8rem",
        top: "-9rem",
    }
    let datetime = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "1rem",
        marginBottom: "0.5rem",
    }
    let send = {
        left: "-18rem",
        top: "-10rem",
    }
    const [style, setStyle] = useState("spanInv");
    const [style2, setStyle2] = useState("spanInv spanHide");

    const [style3, setStyle3] = useState(false);
    const [style4, setStyle4] = useState(false);
    const [style5, setStyle5] = useState(false);
    const [style6, setStyle6] = useState(false);

    const changeStyle = () => {
        setStyle("spanInv spanHide");
        setStyle2("spanShow composeBody spanInv");
    };

    const changeStyle2 = () => {
        if(style3){
            setStyle3(false);
        }
        else {
            setStyle3(true);
        }
    };
    const changeStyle3 = () => {
        if(style4)
            setStyle4(false)
        else 
            setStyle4(true)
    };
    const changeStyle4 = () => {
        if(style5)
            setStyle5(false)
        else 
            setStyle5(true)
    };
    const changeStyle5 = () => {
        if(style6)
            setStyle6(false)
        else 
            setStyle6(true)
    };
    return (
        <div className="main2">
            <div style={{...mainStyle}} className="main">
                <div style={header} className="header">
                    <div style={headerContent} className="headerContent">
                        <img src={Share} alt="logo" className={style5 ? "halpha" : "spanVis"} />
                        <div style={{ ...hoveroutStyle }} className="hiddenCLB alpha">
                            <div style={hoverStyle} className="hidebody">
                                <div style={hoverBody} className="hoverBody">
                                    Share Email Alpha
                                    <div style={peek} className="peek"></div>
                                </div>
                            </div>
                        </div>
                        <span className={style5 ? "spanHide" : "spanShow"}>
                            Subject
                        </span>
                    </div>
                    <div style={headerContent} className="headerContent">
                        <img style={imgStyle} src={remove} className='hmini' alt="minus" onClick={changeStyle4}/>
                        <div style={{ ...hoveroutStyle }} className="hiddenCLB mini">
                            <div style={hoverStyle} className="hidebody">
                                <div style={hoverBody} className="hoverBody">
                                    Minimize Draft
                                    <div style={peek} className="peek"></div>
                                </div>
                            </div>
                        </div>
                        <img style={imgStyle} src={Close} className='hcross' alt="cross" />
                        <div style={{ ...hoveroutStyle }} className="hiddenCLB cross">
                            <div style={{ ...hoverStyle, ...closeextra }} className="hidebody">
                                <div style={hoverBody} className="hoverBody">
                                    Close
                                    <div style={{ ...peek, ...peekex }} className="peek"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={headerBody} className={style5 ? "headerBody spanShow" : "spanHide"} >
                    <div style={composeBody} className="composeBody">
                        <label> From </label>
                        <input type="text" name="fromId" id="userId" value="narutouzumaki2002@gmail.com" />
                    </div>
                    <div style={{ ...composeBody, ...borderBStyle }} className="composeBody">
                        <label>
                            To
                        </label>
                        <input type="text" name="toId" id="toId" onClick={changeStyle} />
                        <div className={style}>
                            <div>CC</div>
                            <div>BCC</div>
                        </div>
                    </div>
                    <div style={{ ...composeBody, ...borderBStyle }} className={style2}>
                        <input type="text" name="cc" id="cc" />
                        <div className="spanInv">
                            <div>CC</div>
                        </div>
                    </div>
                    <div style={{ ...composeBody, ...borderBStyle }} className={style2}>
                        <input type="text" name="bcc" id="bcc" />
                        <div className="spanInv">
                            <div>BCC</div>
                        </div>
                    </div>
                    <div style={{ ...composeBody, ...borderBStyle }} className="composeBody">
                        <input type="text" name="subject" id="subject" placeholder='Subject' />
                    </div>
                    <div style={composeBody} className="composeBody">
                        {/* Main textarea */}
                        <textarea name="composeMain" id="composeMain"></textarea>
                    </div>
                </div>
                <div style={ComposeLower} className={style5 ? "ComposeLower spanShow" : "spanHide"}>
                        <div style={ComposeBtns} className="composerBBody">
                            <div style={ComposeBtns} className="composerLBody">
                                <img src={link} alt="link" className={style3 ? "bg" : ''} onClick={changeStyle2} />
                                <div style={{ ...hoveroutStyle}} className={style3 ? "spanShow" : "spanHide"}>
                                    <div style={{ ...hoverStyle, ...comex}} className="hidebody">
                                        <div style={{ ...hoverBody, ...comBtn }} className="hoverB">
                                            <input style={borderStyle} type="text" placeholder='Https://' name="link" id="link" />
                                            <div style={btnStyle} className="btnStyles">
                                                <button style={btnStyles} onClick={changeStyle2}> Add Link </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={ComposeBtns} className="composerLBody">
                                <img src={attachment} alt="attach" className='hattach' />
                                <div style={{ ...hoveroutStyle }} className="hiddenCLB attach">
                                    <div style={hoverStyle} className="hidebody">
                                        <div style={hoverBody} className="hoverBody">
                                            Add Attachment
                                            <div style={peek} className="peek"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={ComposeBtns} className="composerLBody">
                                <img src={trash} alt="trash" />
                            </div>
                            <div style={{ ...ComposeBtns, ...borderStyle }} className="composerLBody">
                                <label onClick={changeStyle3} >Send</label>
                                <img src={LD} alt="send"/>
                                <div style={{ ...hoveroutStyle }} className={style4 ? "spanShow" : "spanHide"}>
                                    <div style={{ ...hoverStyle, ...comex, ...comBtn, ...send }} className="hidebody">
                                        <label> Schedule Email </label>
                                        <div style={{ ...datetime, ...borderStyle }} className="datetime">
                                            <div className="datetimes">00/00/0000</div>
                                            <div className="datetimes">00:00 AM</div>
                                        </div>
                                        <div style={btnStyle} className="btnStyles">
                                            <button style={btnStyles} onClick={changeStyle3}> Schedule Now </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="dropdown">
                <div className="ddd">
                    <div className="input">
                        <input style={borderStyle} type="text" onClick={changeStyle5} />
                    </div>
                    <div className={style6 ? "userData" : "spanHide"}>
                        <div className="user">
                            <div className="pic">
                                TU
                            </div>
                            <div className="userEmail">
                                <div className="fn">
                                    Full Name
                                </div>
                                <div className="em">
                                    Email of user
                                </div>
                            </div>
                        </div>
                        <div className="user">
                            <div className="pic">
                                TU
                            </div>
                            <div className="userEmail">
                                <div className="fn">
                                    Full Name
                                </div>
                                <div className="em">
                                    Email of user
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailComp2