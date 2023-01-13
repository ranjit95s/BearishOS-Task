import React from 'react';
import './leftSide.css';
import h from './img/h.png';
import cf from './img/cf.png';
import dcb from './img/dcb.png';
import logoM from './img/logoM.png';
import m from './img/m.png';
import s from './img/s.png';
import v from './img/v.png';
const LeftSide = () => {

    const [over,setOver]=React.useState(false);

    let buttonstyle={
        backgroundColor:'',
        display: "flex",
        textAlign: "start",
    }
    let bg = {
        backgroundColor: "rgb(221, 220, 220)",
    }
    
    if(over){
        buttonstyle.backgroundColor="#5EE2A0";
    }
    else{
        buttonstyle.backgroundColor='';
    }

    const myStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "2px",
        fontSize: "15px",
        marginTop: "15px",
        marginBottom: "15px",
    };
    const searchStyle = {
        display: "flex",
        textAlign: "start",
        fontSize: "15px",
        marginTop: "10px",
        cursor: "pointer",
        padding: "1px",
        borderRadius: "3px",
        flexDirection: "row",
        justifyContent: "space-between",
    };
    
    return (
        <div className='left'>
            <div className="leftInner" >
                <div className="logo" style={myStyle}>
                    <h2> <span> <img src={logoM} alt="" /> </span> Bearish OS </h2>
                    <img src={dcb} alt="" />
                </div>
                <div className="search" style={{...searchStyle,...bg}}>
                    <h2> <span> <img src={s} alt="" /> </span> Search Bearish OS </h2>
                </div>
                <div tabindex="1" className="search focus"  style={{...searchStyle,...buttonstyle}} onMouseOver={()=>setOver(true)} 
      onMouseOut={()=>setOver(false)}>
                    <h2> <span> <img src={h} alt="" /> </span> Dashboard </h2>
                </div>
                <div className="logo" style={searchStyle}>
                    <h2> <span> <img src={v} alt="" /> </span> Video Calls </h2>
                    <img src={cf} alt="" />
                </div>
                <div className="logo" style={searchStyle}>
                    <h2> <span> <img src={m} alt="" /> </span> Inbox </h2>
                    <img src={cf} alt="" />
                </div>
            </div>  
        </div>
    )
}

export default LeftSide