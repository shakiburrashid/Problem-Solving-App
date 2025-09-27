import React from 'react'
const mainDiv = 'px-7 cursor-pointer py-5 w-150 h-53 rounded-xl shadow-xl max-2xl:w-120 max-2xl:h-43 max-2xl:p-3 max-md:w-80 max-md:h-65 max-md:place-content-center'
function Card({ Cards }) {
    const { id, title, social_media, description, customer, priority, status, createdAt } = Cards.data;
    console.log(Cards.data)
    return (
        <div className={mainDiv}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl max-2xl:text-xl">{title}</h1>
                <div className={`flex gap-1.5 items-center  h-10 w-25 place-content-center rounded-2xl p-5 ${status === 'Open' ? 'bg-green-200 text-green-600' : (status === 'Closed') ? 'bg-red-200 text-red-600' : 'bg-amber-200 w-37 text-amber-600'}`}>
                    <i className="fa-solid fa-circle "></i>
                    <h1>{status}</h1>
                </div>
            </div>
            <div className="mt-3">
                <p className="text-sm ">{description}</p>
                <div className="flex mt-5 justify-between items-center max-md:flex-col max-md:gap-2">
                    <div className="flex gap-5 items-center max-md:gap-35">
                        <p className="text-xl text-gray-500  max-2xl:text-sm"># <span>{id}</span></p>
                        <h3 className="text-xl text-red-500 font-semibold max-2xl:text-sm"><span>{priority}</span> Priority</h3>
                    </div>
                    <div className="flex gap-3 items-center text-xl text-gray-500 max-2xl:text-sm  max-md:gap-30">
                        <h2>{customer} </h2>
                        <div className="flex gap-1 items-center">
                            <i className="fa-solid fa-calendar"></i>
                            <h1>{createdAt}</h1>
                        </div>
                    </div>
                </div>
                <h1 className='mt-2 font-semibold text-2xl'># <span>{social_media}</span></h1>
            </div>
        </div>
    );
}

export default Card
