import react, { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Search from './Search';
import Loading from './Loading';
import Genre from './Genre';

type ParentProp = {
    handleClick: (value: any) => void
    data: any
    isLoading: boolean
    title: string
}

const Home: React.FC<ParentProp> = ({ handleClick, data, isLoading, title }) => {
    const [search, setSearch] = useState('');

    function handleSearch(e: any) {
        setSearch(e)
    }

    const filteredData = data.filter((item: any) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="font-mono bg-blue-gray-700 h-auto">
            {search ? <Card title={title} data={filteredData} onChange={handleSearch} click={handleClick} /> : <div>{isLoading ? <Loading /> : <Card click={handleClick} onChange={handleSearch} title={title} data={data} />}</div>}
        </div>
    );
};

export default Home;
