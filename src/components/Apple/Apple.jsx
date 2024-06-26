import React from 'react';
import './Apple.css'
import rasm from '../../assets/img/fit.png'
import rasm1 from '../../assets/img/xiom.png'
import rasm2 from '../../assets/img/appl.png'

const Apple = () => {
    return (
        <div className='container'>
            <div className="Apple">
<div className="Apple_all">
   <div className="appli">
   <div className="alli_1">
        <img src={rasm2} alt="" />
    </div>
    <div className="alli_1">
       <h1>Apple</h1>
       <p>Apple is one of the most famous smart watches providing company.</p>
    </div>
   </div>
</div>
<div className="Apple_all">
   <div className="appli">
   <div className="alli_1">
        <img src={rasm1} alt="" />
    </div>
    <div className="alli_1">
       <h1>Apple</h1>
       <p>Apple is one of the most famous smart watches providing company.</p>
    </div>
   </div>
</div>
<div className="Apple_all">
   <div className="appli">
   <div className="alli_1">
        <img src={rasm} alt="" />
    </div>
    <div className="alli_1">
       <h1>Apple</h1>
       <p>Apple is one of the most famous smart watches providing company.</p>
    </div>
   </div>
</div>
            </div>
        </div>
    );
}

export default Apple;
