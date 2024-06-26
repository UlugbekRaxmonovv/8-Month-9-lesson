import React from 'react';
import rasm from '../../assets/img/sva.png'
import rasm1 from '../../assets/img/sva1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Svager.css'

const Svager = () => {
    return (
        <div className='container'>
            <div className="p">
                <div className="p1">
                    <p>Here are our some of the best clients.</p>
                    <h1>What People Say About Us</h1>
                </div>
            </div>
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="Svager_all">
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm1} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="Svager_all">
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm1} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="Svager_all">
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm1} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="Svager_all">
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm1} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide> <div className="Svager_all">
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
                <div className="Svager_row">
   <div className="Svager_row_al">
    <div className="Svager_row_row">
<img src={rasm1} alt="" />
    </div>
    <div className="Svager_row_row">
 <h1>Hamza Faizi</h1>
 <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
    </div>
   </div>
                </div>
            </div></SwiperSlide>
      </Swiper>
           
        </div>
    );
}

export default Svager;
