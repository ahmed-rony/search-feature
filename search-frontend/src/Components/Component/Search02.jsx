import React, { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';

const Search02 = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`http://localhost:30000/users?q=${query}`);
            setData(res.data);
        };
        if (query.length > 2) fetchUsers();
    }, [query])

    return (
        <div className='search02'>
            <input type="text" placeholder='Search from backend' onChange={(e) => setQuery(e.target.value)} />
            {query !== "" && <Table data={data} />}
        </div>
    );
};

export default Search02;