import React from 'react'

function Banner() {
  const size = "h-80 w-250 rounded-4xl place-content-center flex flex-col items-center gap-5 max-2xl:h-50 max-md:w-80 cursor-pointer"
  return (
    <div className='flex justify-between gap-10 max-md:flex-col'>
      <div className={`${size} bg-gradient-to-b from-amber-400 to-amber-700 hover:border-3 border-white`}>
        <h1 className='text-5xl font-bold max-md:text-4xl text-white'>In Progress</h1>
        <h1 className='text-7xl font-extrabold max-2xl:text-5xl text-white'>0</h1>
      </div>
      <div className={`${size} bg-gradient-to-b from-green-400 to-green-700 hover:border-3 border-white`}>
        <h1 className='text-5xl font-bold max-md:text-4xl text-white'>In Solved</h1>
        <h1 className='text-7xl font-extrabold max-2xl:text-5xl text-white'>0</h1>
      </div>
    </div>
  );
}

export default Banner
