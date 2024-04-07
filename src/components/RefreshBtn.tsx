import React from 'react';

const RefreshButton: React.FC = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className='pl-8 mt-10 ml-10'>
            <button onClick={handleRefresh}>
                CLEAR GENRE
            </button>
        </div>

    );
};

export default RefreshButton;
