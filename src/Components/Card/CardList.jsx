import React, { use, useState } from 'react'
import Card from './Card'
import ListTittle from '../ListTittle/ListTittle'

function CardList({ SocialMediaFetch }) {
    const DataUse = use(SocialMediaFetch)

    const [showData, setShowData] = useState([])
    const [tittle, setTittle] = useState([])

    const cardShow = (data,tittleOfData) => {
        setShowData(data)
        setTittle(tittleOfData)
    }


    return (
        <div >
            <div className='mt-20'>
                <h1 className='text-center font-bold text-5xl mb-10'>Tittle</h1>
                <div className='flex justify-evenly  items-center'>
                    {DataUse.map(tittle => <ListTittle key={tittle.id} tittle={tittle} cardShow={cardShow} />)}
                </div>
                <h1 className='text-4xl font-bold mt-10 mb-5'>Ticket Show</h1>
                <div className=' grid grid-cols-2 w-310 gap-5'>
                    {showData.map(Cards => <Card key={Cards.id} Cards={Cards} tittle={tittle}/>)}
                </div>
            </div>

        </div>
    )
}

export default CardList
