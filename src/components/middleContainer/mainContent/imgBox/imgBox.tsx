import React from 'react'
import project_data from '../../../../data/project_data'
import './imgBox.scss'

function ImgBox() {
  return (
    <>
      {
        project_data.map((item, index) => {
          return (
            <div className='img-box' key={index}>
              <img src={item.img} alt="img" />
              <h6>{item.title}</h6>
              <p>{item.category}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default ImgBox