/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.scss';
import { MdNotifications, MdSearch } from "react-icons/md";
import BasicButton from '../button/button';
import { useEffect, useState } from 'react';
import project_data from '../../data/project_data';

function Header() {

  const [navColor, setNavColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setNavColor(true);
    }
    else {
      setNavColor(false);
    }
  }
  window.addEventListener('scroll', changeColor)

  type Project = {
    title: string;
  }

  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState<Project[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search !== "") {
      const newFilterData = project_data.filter((project: Project) => {
        return project.title.toLowerCase().includes(search.toLowerCase());
      });
      setSearchedData(newFilterData);
    } else {
      setSearchedData([]);
    }
  }, [search]);

  return (
    <header className={navColor ? 'header header-bg' : 'header'}>
      <nav className='navbar'>
        <a href="#" className='logo'>Behance</a>
        <a href="#">For You</a>
        <a href="#">Discover</a>
        <a href="#">Hire</a>
        <a href="#">Assets</a>
        <a href="#">Jobs</a>
      </nav>
      <div className="search-box">
        <MdSearch className='search-icon' />
        <input type="text" className="search-text"
          placeholder='Search...' autoComplete='off'
          onChange={handleChange}
          value={search} />
        <div >
          <ul>
            {searchedData.map((data, index) => {
              return <li className="search-result" key={index}>{data.title}</li>
            })
            }
          </ul>
        </div>
      </div>
      <div className='right-div'>
        <MdNotifications className='notify-icon' />
        <BasicButton label="Login In" />
        <BasicButton label="Sign Up" sub_className='active' />
      </div>
    </header>
  )
}

export default Header