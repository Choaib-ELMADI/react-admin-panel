import React from 'react';
import { BsSearch, BsMoonStarsFill, BsListCheck, BsFillChatRightTextFill } from 'react-icons/bs';
import { BiCollapse } from 'react-icons/bi';
import { MdLanguage } from 'react-icons/md';
import { IoMdNotifications } from 'react-icons/io';

import './Navbar.scss';
import images from '../../constants/images';



const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" placeholder='Search...' />
          <BsSearch size={ 22 } className='icon' />
        </div>

        <div className="items">
          <div className="item">
            <MdLanguage className='icon' size={ 21 } />
            <span>English</span>
          </div>

          <div className="item">
            <BsMoonStarsFill className='icon' size={ 19 } />
          </div>

          <div className="item">
            <BiCollapse className='icon' size={ 24 } />
          </div>

          <div className="item notification">
            <IoMdNotifications className='icon' size={ 24 } />
            <label>8</label>
          </div>

          <div className="item notification">
            <BsFillChatRightTextFill className='icon' size={ 20 } />
            <label>3</label>
          </div>

          <div className="item">
            <BsListCheck className='icon' size={ 22 } />
          </div>

          <div className="item profile">
            <img src={ images.profile } alt="Choaib ELMADI" draggable={ false } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;