import React from 'react';
import Search01 from './Component/Search01';
import Search02 from './Component/Search02';
import './style.scss';

const MainPage = () => {
    return (
        <div className='content'>
            <Search01/>
            <Search02/>
        </div>
    );
};

export default MainPage;