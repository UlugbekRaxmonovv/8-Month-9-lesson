import React from 'react';
import './Main.css'
import './Main.css'
import { IoSearchOutline } from "react-icons/io5";
import rasm from '../../assets/img/main.png'
const Main = () => {
    return (
        <div className='hammasi'>
           <div className="container">
            <div className="main">
                <div className="main_all">
                <h1>Discover Most Suitable Watches</h1>
                <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                <div className="input">
        <div className="input_all">
        <IoSearchOutline  />
              <input type="text"  placeholder='Enter Email Address'/>
        </div>

        <div className="input_all">
            <button>Subscribe</button>
        </div>
    </div>
                </div>
                <div className="main_all">
              <img src={rasm} alt="" />
                </div>
            </div>
           </div>
        </div>
    );
}

export default Main;
