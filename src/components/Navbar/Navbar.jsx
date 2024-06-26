import React from 'react';
import './Navbar.css'
import rasm from '../../assets/img/Logo.svg'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='header'>
          <header>
            <nav className='container'>
                <img src={rasm} alt="" />
                <ul>
                <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Brands</a>
                    </li>
                    <li>
                        <a href="">Recent Products</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>
                <div className="all">
                    <div className="icon">
                    <IoSearchOutline />
                    </div>
                    <div className="icon">
                    <FaUser />
                    </div>
                    <div className="icon">
                    <FaCartShopping />
                    <span className='span'>1</span>
                    </div>
                  
                </div>
            </nav>
          </header>
        </div>
    );
}

export default Navbar;
