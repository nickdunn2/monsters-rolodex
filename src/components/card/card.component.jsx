import React from 'react'

import './card.styles.css'

const ROBO_HASH_URL = 'https://robohash.org/'

export const Card = props => (
  <div className='card-container'>
    <img alt='monster' src={`${ROBO_HASH_URL}${props.monster.id}?set=set2&size=180x180`}/>
    <h2>{ props.monster.name }</h2>
    <p>{ props.monster.email }</p>
  </div>
)
