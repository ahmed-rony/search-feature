import React from 'react';

const Table = ({ data }) => {
    return (
        <div className='Table'>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                    </tr>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;