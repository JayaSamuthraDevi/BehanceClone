import React from 'react'
import "./sidebar.scss"
import { GiSettingsKnobs } from "react-icons/gi";
import BasicButton from '../../button/button';
import category_data from '../../../data/category_data';

function Sidebar() {
       const handleFilterClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log("Filter button clicked", e.target);
      }
      return (
        <div className='sidebar'>
          <div className="filter-div">
            <GiSettingsKnobs />
            <h5>Filter</h5>
          </div>
          <div className="filter-options">
            {category_data.map((item, index) => {
              return (
                <BasicButton key={index} label={item} sub_className='filter-btn' clickFunction={handleFilterClick} />
              )
            })}
          </div>
        </div>
      )
  }
  export default Sidebar;