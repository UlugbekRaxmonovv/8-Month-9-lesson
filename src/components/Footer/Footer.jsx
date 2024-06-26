import React from 'react';
import './Footer.css'
import rasm from '../../assets/img/section.png'

const Footer = () => {
    return (
        <div>

            <div className="section">
<div className="section_all container">
<div className="section_all_row ">
    <h1>Subscribe To Newsletter</h1>
    <p>Get free guide about smart watches daily. </p>
    <div className="input">
        <div className="input_all">
              <input type="text"  placeholder='Enter Email Address'/>
        </div>

        <div className="input_all">
            <button>Subscribe</button>
        </div>
    </div>
</div>
<div className="section_all_row">
    <img src={rasm} alt="" />
</div>
</div>
            </div>
            <footer>
                <div className="footr_All container">
                    <div className="fotr_row">
                        <h1>Copyright @ 2022 | Mohid</h1>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
