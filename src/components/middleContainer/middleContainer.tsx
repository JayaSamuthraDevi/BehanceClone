import React from 'react'
import Sidebar from './sidebar/sidebar'
import './middleContainer.scss'
import MainContent from './mainContent/mainContent'

function MiddleContainer() {
  return (
    <div className='middle-container'>
      <Sidebar />
      <MainContent/>
    </div>
  )
}

export default MiddleContainer