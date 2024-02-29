import React from 'react';
import c from './nav.module.css';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { TbMessageCircle2 } from 'react-icons/tb';
import { FaUserFriends } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsMusicNoteList } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={c.nav}>
      <div className={c.a}>
        <Link to="/" className={c.nav_wrap} >
          <IoPersonCircleSharp className={c.icon} />
          <p className={c.link}>Профиль</p>
        </Link>
      </div>
      <div className={c.links}>
        <Link to="/messanger" className={c.nav_wrap}>
          <TbMessageCircle2 className={c.icon} />
          <p className={c.link}>Сообщения</p>
        </Link>
      </div>
      <div className={c.links}>
        <Link to="/friends" className={c.nav_wrap}>
          <FaUserFriends className={c.icon} />
          <p className={c.link}>Друзья</p>
        </Link>
      </div>
      <div className={c.links}>
        <Link to="/group" className={c.nav_wrap}>
          <MdGroups className={c.icon} />
          <p className={c.link}>Сообщества</p>
        </Link>
      </div>
      <div className={c.links}>
        <Link to="/news" className={c.nav_wrap}>
          <IoNewspaperOutline className={c.icon} />
          <p className={c.link}>Новости</p>
        </Link>
      </div>
      <div className={c.links}>
        <Link to="/music" className={c.nav_wrap}>
          <BsMusicNoteList className={c.icon} />
          <p className={c.link}>Музыка</p>
        </Link>
      </div>
      <div className={c.links}>
        <Link to="/setting" className={c.nav_wrap}>
          <AiFillSetting className={c.icon} />
          <p className={c.link}>Настройки</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
