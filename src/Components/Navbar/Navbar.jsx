import React from 'react'

function Navbar() {
    return (
        <div>
            <div className=" px-10 font-roboto h-20 flex justify-between items-center shadow-sm">
                <div>
                    <h1 className="text-4xl font-extrabold cursor-pointer"><span className="text-red-500"> Problem</span><span className="text-green-600"> Soliving App</span></h1>
                </div>

                <div >
                    <ul className="flex gap-5 text-2xl">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Add-Problem</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
