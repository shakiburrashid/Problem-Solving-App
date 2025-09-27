import { Link } from 'react-router-dom';
import React from 'react'
function Navbar() {
    return (
        <div>
            <div className=" px-10 font-roboto h-20 flex justify-between items-center shadow-sm">
                <div>
                    <h1 className="text-4xl font-extrabold cursor-pointer"><span className="text-red-500"> Problem</span><span className="text-green-600"> Soliving App</span></h1>
                </div>

                <nav >
                    <ul className="flex gap-5 text-2xl">
                        <Link to='/'> <li className="cursor-pointer">Home</li></Link>
                        <Link to='/about'><li className="cursor-pointer">About</li></Link>
                        <Link to='/faq'>  <li className="cursor-pointer">FAQ</li></Link>
                        <Link to='/contact'> <li className="cursor-pointer">Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
