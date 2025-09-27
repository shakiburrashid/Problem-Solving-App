import React, { Suspense } from 'react'
import CardList from './CardList'


const SocialMediaGet = async () => {
    const dataGET = await fetch('SocialMedia.json')
    return dataGET.json()
}
const SocialMediaFetch = SocialMediaGet()




function CardGet() {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <CardList SocialMediaFetch={SocialMediaFetch} />
            </Suspense>
        </div>
    )
}

export default CardGet
