import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
const cardsref = useRef();
useEffect(()=>{
  cardsref.current.addEventListener('wheel',handlewheel);
},[]);
const TitleCards = () => {
  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsref}>
        {
          cards_data.map((card,index)=>{
return <div className='card' key={index}>
  <img src={card.image} alt="" />
  <p>{card.name}</p>
</div>
          })
        }
      </div>

    </div>
  )
}

export default TitleCards
