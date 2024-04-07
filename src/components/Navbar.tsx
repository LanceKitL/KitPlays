import React from 'react'
import Genre from './Genre'

const Navbar = () => {
    return (
        <div>

            <nav className="flex justify-between gap-5 p-5 items-center bg-blue-gray-800 text-gray-200">
                {/* Logo Here */}
                <div className="flex  gap-3 justify-center items-center">
                    <h1 className=" text-2xl">KitPlays</h1>
                    <p className="text-blue-200 pt-1"> -- Find Multiplayer Games <em>EASIER!</em> -- </p>
                </div>
                {/* Links Here */}
                <ul className="xl:flex lg:flex md:flex gap-5 jujstify-center items-center hidden">
                    <li className='cursor-pointer'>Home</li>
                    <li className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 cursor-pointer px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Buy me a ☕</li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
