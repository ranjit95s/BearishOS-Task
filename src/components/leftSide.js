import React from 'react'
import './leftSide.css';
import h from './img/h.png';
import cf from './img/cf.png';
import dcb from './img/dcb.png';
import logoM from './img/logoM.png';
import m from './img/m.png';
import s from './img/s.png';
import v from './img/v.png';
const LeftSide = () => {
    return (
        <div className='left'>
            <div className="leftInner">
                <div className="al al3">
                    <div className="al2">
                        <span><img src={logoM} alt="d" srcset="" /></span>
                        Bearish OS
                    </div>
                    <div className="al2">
                        <img src={dcb} alt="" srcset="" />
                    </div>
                </div>
                <ul>
                    <li tabIndex="1" className="firstC">
                        <span><img src={s} alt="d" srcset="" /></span>
                        Search Bearish OS
                    </li>
                    <li tabIndex="2">
                        <span><img src={h} alt="d" srcset="" /></span>
                        Dashboard
                    </li>
                    <li tabIndex="3">
                        <div className="al">
                            <div className="al2">
                                <span><img src={v} alt="d" srcset="" /></span>
                                Video Calls
                            </div>
                            <div className="al2">
                                <img src={cf} alt="d" srcset="" />
                            </div>
                        </div>
                    </li>
                    <li tabIndex="4">
                        <div className="al">
                            <div className="al2">
                                <span><img src={m} alt="d" srcset="" /></span>
                                Inbox
                            </div>
                            <div className="al2">
                                <img src={cf} alt="d" srcset="" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSide