import React from 'react'
import tags from "../genre.json";
import RefreshButton from './RefreshBtn';


type GenreProp = {
    click: (value: any) => void
}

const Genre: React.FC<GenreProp> = ({ click }) => {

    const handleClick = (e: any) => {
        const valueToSend = e.target.value;
        click(valueToSend);
    }

    return (
        <div className='text-white m-10 '>
            <p className="text-3xl my-7 text-center">Genres</p>
            <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
                {tags.genre.map((tag, key) => (
                    <button onClick={handleClick} key={key} value={tag} className="cursor-pointer hover:text-gray-500 transition-all" >
                        <span className='text-blue-700'>•</span> {tag.toUpperCase()}
                    </button>
                ))}

            </ul>
            <RefreshButton />
        </div>
    )
}

export default Genre