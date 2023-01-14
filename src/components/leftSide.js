import React from 'react';
import './leftSide.css';
// Importing Images
import h from './img/h.png';
import cf from './img/cf.png';
import dcb from './img/dcb.png';
import logoM from './img/logoM.png';
import m from './img/m.png';
import s from './img/s.png';
import v from './img/v.png';

const LeftSide = () => {

    // Hover on DashBoard
    const [over,setOver]=React.useState(false);

    // focus or click on DashBoard | adding focus element
    const [style, setStyle] = React.useState("search");
    const changeStyle = () => {
        setStyle("focus");
    };
    
    // Adding-Removing bg-color on Hover effect
    let buttonstyle={
        backgroundColor:'',
    }
    if(over)
        buttonstyle.backgroundColor="#5EE2A0";
    else
        buttonstyle.backgroundColor='';
    

    // Adding CSS using React Method
    const leftStyle = {
        width:"25%", marginLeft: "20px", 
        marginTop: "20px", fontFamily:"sans-serif",
    };
    const imgStyle = {
        width: "23px", position: "relative",
        top: "4px", marginRight: "5px",   
    };
    const myStyle = {
        display: "flex", flexDirection: "row",
        justifyContent: "space-between", padding: "2px",
        fontSize: "15px", marginTop: "15px", marginBottom: "15px",
    };
    const searchStyle = {
        display: "flex", textAlign: "start",
        fontSize: "15px", marginTop: "10px",
        cursor: "pointer", padding: "1px",
        borderRadius: "3px", flexDirection: "row", justifyContent: "space-between",
    };
    let bg = {
        backgroundColor: "rgb(221, 220, 220)",
    }
    
    return (
        <div className='left' style={leftStyle}>
            <div className="leftInner" >
                {/* Main Logo */}
                <div className="logo" style={myStyle}>
                    <h2> <span> <img style={imgStyle} src={logoM} alt="" /> </span> Bearish OS </h2>
                    <img style={imgStyle} src={dcb} alt="" />
                </div>
                {/* Search Bar */}
                <div className="search" style={{...searchStyle,...bg}}>
                    <h2> <span> <img style={imgStyle} src={s} alt="" /> </span> Search Bearish OS </h2>
                </div>
                {/* DashBoard Navigation | using reactJs NavLink- 'isActive' method would be much easier to add static background color */}
                <div tabindex="1" className={style}  style={{...searchStyle,...buttonstyle}} 
                    onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)} onClick={changeStyle} >
                    <h2> <span> <img style={imgStyle} src={h} alt="" /> </span> Dashboard </h2>
                </div>
                {/* Video Calls */}
                <div className="logo" style={searchStyle}>
                    <h2> <span> <img style={imgStyle} src={v} alt="" /> </span> Video Calls </h2>
                    <img style={imgStyle} src={cf} alt="" />
                </div>
                {/* Inbox */}
                <div className="logo" style={searchStyle}>
                    <h2> <span> <img style={imgStyle} src={m} alt="" /> </span> Inbox </h2>
                    <img style={imgStyle} src={cf} alt="" />
                </div>
            </div>  
        </div>
    )
}

export default LeftSide