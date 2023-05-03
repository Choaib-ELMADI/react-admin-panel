import React, { useContext } from 'react';
import { BsSearch, BsMoonStarsFill, BsSunFill, BsListCheck, BsFillChatRightTextFill } from 'react-icons/bs';
import { BiCollapse } from 'react-icons/bi';
import { MdLanguage } from 'react-icons/md';
import { IoMdNotifications } from 'react-icons/io';

import { DarkModeContext } from '../../context/DarkModeContext';
import './Navbar.scss';
import images from '../../constants/images';



const Navbar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);

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
            { !darkMode && <BsMoonStarsFill className='icon' size={ 19 } onClick={ () => dispatch({ type: 'TOGGLE' }) } /> }
            { darkMode && <BsSunFill className='icon' size={ 19 } onClick={ () => dispatch({ type: 'TOGGLE' }) } /> }
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