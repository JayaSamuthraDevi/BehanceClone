/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.scss';
import { MdNotifications, MdSearch } from "react-icons/md";
import BasicButton from '../button/button';

function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <a href="#" className='logo'>Behance</a>
        <a href="#">For You</a>
        <a href="#">Discover</a>
        <a href="#">Hire</a>
        <a href="#">Assets</a>
        <a href="#">Jobs</a>
      </nav>
      <div className="search_box">
        <MdSearch className='search_icon' />
        <input type="text" className="search_text" placeholder='Search...' />
      </div>
      <div className='right-div'>
        <MdNotifications className='notify_icon' />
        <BasicButton label="Login In" />
        <BasicButton label="Sign Up" sub_className='active' />
      </div>
    </header>
  )
}

export default Header