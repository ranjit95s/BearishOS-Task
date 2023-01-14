import React from 'react';
import './leftSide.css';
import "@fontsource/source-serif-pro";
// Importing Images
import h   from './img/h.png';
import cf  from './img/cf.png';
import dcb from './img/dcb.png';
import lg  from './img/logoM.png';
import m   from './img/m.png';
import s   from './img/s.png';
import v   from './img/v.png';

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
        width:"300px", marginLeft: "20px", 
        marginTop: "20px", fontFamily:"Source Serif Pro",
        fontWeight: "lighter", wordSpacing: "0px",
        letterSpacing: "0px",
    };
    const imgStyle = {
        width: "25px",height:"22px", position: "relative",
        top: "4.5px", marginRight: "3px", 
    };
    const myStyle = {
        display: "flex", flexDirection: "row",
        justifyContent: "space-between", padding: "1px",
        fontSize: "18px", marginTop: "15px", marginBottom: "15px",
    };
    const searchStyle = {
        display: "flex", textAlign: "start",
        fontSize: "18px", marginTop: "10px",
        cursor: "pointer", padding: "1.2px",
        borderRadius: "5px", flexDirection: "row", justifyContent: "space-between",
    };
    let bg = {
        backgroundColor: "#f3f3f3",
        
    }
    
    return (
        <div className='left' style={leftStyle}>
            <div className="leftInner" >
                {/* Main Logo */}
                <div className="logo" style={myStyle}>
                    <div> <span> <img style={imgStyle} src={lg} alt="" /> </span> Bearish OS </div>
                    <img style={imgStyle} src={dcb} alt="" />
                </div>
                {/* Search Bar */}
                <div className="search" style={{...searchStyle,...bg}}>
                    <div> <span> <img style={imgStyle} src={s} alt="" /> </span> Search Bearish OS </div>
                </div>
                {/* DashBoard Navigation | using reactJs NavLink- 'isActive' method would be much easier to add static background color */}
                <div tabIndex="1" className={style}  style={{...searchStyle,...buttonstyle}} 
                    onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)} onClick={changeStyle} >
                    <div> <span> <img style={imgStyle} src={h} alt="" /> </span> Dashboard </div>
                </div>
                {/* Video Calls */}
                <div className="logo" style={searchStyle}>
                    <div> <span> <img style={imgStyle} src={v} alt="" /> </span> Video Calls </div>
                    <img style={imgStyle} src={cf} alt="" />
                </div>
                {/* Inbox */}
                <div className="logo" style={searchStyle}>
                    <div> <span> <img style={imgStyle} src={m} alt="" /> </span> Inbox </div>
                    <img style={imgStyle} src={cf} alt="" />
                </div>
            </div>  
        </div>
    )
}

export default LeftSide