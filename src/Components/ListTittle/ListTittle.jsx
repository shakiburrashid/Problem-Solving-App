import React, { useState } from 'react'
import Card from '../Card/Card'

function ListTittle({ tittle, cardShow }) {
  const [isActive, setIsActive] = useState(null);

  

  return (
    <div>
      <h1 onClick={() => { cardShow(tittle.data, tittle.social_media); setIsActive(!isActive) }} className={` ${(isActive) ? 'border-5 border-red-600' : ''} text-3xl cursor-pointer bg-gradient-to-l from-green-300 to-green-500 h-15 w-40 text-center place-content-center font-bold rounded-xl hover:border-5 border-amber-500`}>{tittle.social_media}</h1>
    </div>
  );
}

export default ListTittle
