import React, { use } from 'react'
import Card from './Card'
import ListTittle from '../ListTittle/ListTittle'

function CardList({ SocialMediaFetch }) {
    const DataUse = use(SocialMediaFetch)
    return (
        <div >
            <div className='mt-20'>
                <h1 className='text-center font-bold text-5xl mb-10'>Tittle</h1>
                <div className='flex justify-evenly  items-center'>
                    {DataUse.map(tittle => <ListTittle key={tittle.id} tittle={tittle} />)}
                </div>

                {/* <div className=''>
                    {DataUse.map(Cards => <Card key={Cards.id} Cards={Cards} />)}
                </div> */}

            </div>

        </div>
    )
}

export default CardList
