import React from 'react'
import './card.scss'
import card_data from '../../../data/card_data'

const Card: React.FC = () => {
  return (
    <>
      {card_data.map((card, index) => {
        const Icon = card.icon;
        return (
          <div className='card-box' key={index}>
            <Icon className='icon' />
            <p>{card.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;