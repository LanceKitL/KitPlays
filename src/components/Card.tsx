import React, { useState } from 'react';
import GameInfo from './GameInfo';
import Search from './Search';
import Genre from './Genre';
import Navbar from './Navbar';

type Props = {
    data: Games[]; // Define the type of data object
    title: string
    onChange: (value: string) => void;
    click: (value: any) => void
}


//THESE ARE THE THINGS U NEED, SO JUST PUT IT ON THE PROP AS THE TYPE
type Games = {
    id: number
    title: string
    short_description: string
    release_date: string
    thumbnail: string
}

const Card: React.FC<Props> = ({ data, title, onChange, click }) => {
    const [gameId, setGameId] = useState<number | null>(null);

    function handleClickk(id: any) {
        console.log(id);
        setGameId(id)
    }

    function goBack() {
        setGameId(null);
    }


    return (
        <div>
            {gameId ? <GameInfo data={data} title={title} gameId={gameId} goBack={goBack} /> : (
                <div>
                    <Navbar />
                    <Genre click={click} />
                    <Search onChange={onChange} />
                    <div className="m-10 p-10 bg-opacity-10 rounded-xl bg-black">
                        {title && <h1 className="text-center text-5xl text-blue-300 my-10">{title}</h1>}
                        <div className="grid sm:text-xm grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-2 m-5 ">
                            {data.map(game => (
                                <div onClick={() => handleClickk(game.id)} className="hover:opacity-80  hover:text-sky-800 transition-all cursor-pointer pt-5 grid place-items-center " key={game.id}>
                                    <img className="aspect-video shadow-md rounded-sm hover:-translate-y-2 transition-all " src={game.thumbnail} alt={game.title} />
                                    <h1 className="my-2 text-white">{game.title.toUpperCase()}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            )}
        </div>




    );
}

export default Card;
