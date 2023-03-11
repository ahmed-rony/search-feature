import React, { useState } from 'react';
import { Users } from '../Data/Users';
import Table from './Table';

const Search01 = () => {
    const [query, setQuery] = useState("");

    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some(key => item[key].toLowerCase().includes(query))
        );
    };

    return (
        <div className='search01'>
            <input type="text" placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
            <div className="result">
                <ul>
                    {Users.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => (
                        <li key={user.id}>{(query !== "") && user.first_name}</li>
                    ))}
                </ul>
                {query !== "" && <Table data={search(Users)} />}
            </div>
        </div>
    );
};

export default Search01;