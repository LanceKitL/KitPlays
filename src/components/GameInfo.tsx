import React, { useState, useEffect } from 'react';
import backBtn from '../image/back.png'
import Loading from './Loading';

type gameInfosProps = {
    gameId: number
    goBack: () => void
    title: string
    data: any
}

type fetchedGame = {
    id: number
    title: string
    publisher: string
    thumbnail: string
    short_description: string
    genre: string
    release_date: string
    minimum_system_requirements: {
        os: string
        processor: string
        memory: string
        graphics: string
        storage: string
    }
    //When youre working with objects, dont forget to turn them into array
    screenshots: {
        id: number
        image: string
    }[] //<---- USING THIS
}







//To use it on your DOM
const GameInfo: React.FC<gameInfosProps> = ({ gameId, goBack, data: activeDatas }) => {
    // Render your GameInfo component
    const [data, setData] = useState<fetchedGame>();
    const [isLoading, setIsLoading] = useState(false);

    //Fetching Specifics
    useEffect(() => {
        activeDatas = null
        const getData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`http://localhost:5000/api/api1/game?id=${gameId}`);
                if (!res.ok) {
                    throw new Error("Failed Fetching");
                }
                const data = await res.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        //Fetched Data
        getData();
    }, [])


    console.log(data);
    return (
        <div>
            {isLoading ? <Loading /> : (
                <div className="relative text-white">
                    {/* Display Datas */}
                    <div className="grid place-items-center xl:text-left sm:text-center sm:grid-cols-1 xl:grid-cols-3 m-5 gap-5 mb-[4rem] bg-blue-gray-700 p-10 rounded-md">
                        <img src={data?.thumbnail} alt={data?.id.toString()} />
                        <div>
                            <p className="text-3xl font-bold">{data?.title}</p>
                            <p className='mb-5'>{data?.publisher}</p>
                            <p>{data?.short_description}</p>
                            <div className="flex gap-5 my-3 ">
                                <p><span className="text-yellow-600">Released: </span>{data?.release_date}</p>
                                <p><span className="text-blue-500">Tags:</span> {data?.genre}</p>
                            </div>
                        </div>
                        <div id="specs" className="flex-row justify-start items-start mb-[4rem]">
                            {/* System Requirements */}
                            <p className="text-green-500 text-3xl my-3">System Requirements</p>
                            {data?.minimum_system_requirements ?
                                <div>
                                    <p><span className="text-green-300">Graphics:</span> {data?.minimum_system_requirements.graphics}</p>
                                    <p><span className="text-green-300">OS:</span> {data?.minimum_system_requirements.os}</p>
                                    <p><span className="text-green-300">Processor:</span> {data?.minimum_system_requirements.processor}</p>
                                    <p><span className="text-green-300">Storage:</span> {data?.minimum_system_requirements.storage}</p>
                                    <p><span className="text-green-300">Memory:</span> {data?.minimum_system_requirements.memory}</p>
                                </div>
                                : <p className="text-red-500"> Not Available</p>}

                        </div>
                    </div>
                    {/* Screenshots here */}
                    <div className="bg-slate-700 rounded-md m-5 p-5">
                        {data?.screenshots.length === 0 ?
                            <div>
                                <p className="text-red-500 text-2xl text-center my-10">Gameplay Not Available</p>

                            </div>
                            :
                            <div>
                                <p className="text-center text-3xl">GAMEPLAY</p>
                                <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 shadow-md gap-1 mb-10 border-slate-900 m-5 ">
                                    {data?.screenshots.slice(0, 3).map((screenshot) => (
                                        <div className="sm:aspect-square xl:aspect-video" key={screenshot.id}>
                                            <img
                                                className="w-full h-[400px] object-cover"
                                                src={screenshot.image}
                                                alt={"loading.."}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        }
                    </div>
                    {/* Go Back Button */}
                    <div className="absolute top-2 left-6">
                        <button className="btn" onClick={goBack}><img className="w-full h-10 cursor-pointer" src={backBtn} /></button>
                    </div>
                </div>

            )}
        </div>


    )
}

export default GameInfo;
