import React, {  useState } from 'react'
import football from '../data/football.json'
import cricket from '../data/cricket.json'
import tennis from '../data/tennis.json'
import tabletennis from '../data/TT.json'
import basketball from '../data/basketball.json'
import badminton from '../data/badminton.json'
import './maincontent.css'
import CRCKT from '../images/cricket-ball.png'
import BSKTBL from '../images/basketball.png'
import FTBL from '../images/soccer_4368530.png'
import TT from '../images/ping-pong.png'
import TNS from '../images/tennis-ball.png'
import SK from '../images/badminton.png'
import  crcktimg from '../images/india vs pakistan.jpeg'
import Ftblimg from '../images/maxresdefault.jpg'
import timg from '../images/tennispic.webp'
import ttimg from '../images/TTpic.jpg'
import badmintonimg from "../images/badmintonimg.jpg"
import basketballimg from "../images/basketballimg.jpeg"
function Maincontent() {
     const [sport, setsport] = useState(football);
     const [img1,setimg1]=useState(Ftblimg);
     const sportArray = Object.values(sport);
     return (
          <div className='mainbox'> 
               <div className='leftsidebar'>
                    <button className='btn' >
                         <img src={FTBL} alt='football' className='icon' onClick={() => { setsport(football);setimg1(Ftblimg) }} />
                    </button>
                    <button className='btn'>
                         <img src={TT} alt='tabletennis' className='icon' onClick={() => { setsport(tabletennis);setimg1(ttimg) }} />
                    </button>
                    <button className='btn'>
                         <img src={CRCKT} alt='cricket' className='icon' onClick={() => { setsport(cricket);setimg1(crcktimg) }} />
                    </button>
                    <button className='btn'>
                         <img src={TNS} alt='tennis' className='icon' onClick={() => { setsport(tennis);setimg1(timg) }} />
                    </button>
                    <button className='btn'>
                         <img src={SK} alt='shuttlecock' className='icon' onClick={() => { setsport(badminton);setimg1(badmintonimg) }} />
                    </button>
                    <button className='btn'>
                         <img src={BSKTBL} alt='basketball' className='icon' onClick={() => { setsport(basketball);setimg1(basketballimg) }} />
                    </button>

               </div>
               <div className='maincontent'>
                    <div className='pics'>
                      <img src={img1} alt='pic'/>
                    </div>
                    <div className='details'>
                         <div className='md'>
                              {sportArray.map(match => (
                                   <div key={match} className='box1'>
                                        <div>{match.no}</div>

                                        <div className='rivals'>
                                             <div> {match.team1}</div>
                                            <bold>V/s</bold> 
                                             <div> {match.team2}</div></div>
                                        <div>📍{match.location}</div>
                                        <div> {match.Date}</div>
                                        <div> 🕒{match.Time}</div>
                                   </div>
                              ))}
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default Maincontent
