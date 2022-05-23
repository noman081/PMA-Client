import React from 'react';

const MyProjectRow = ({ index, p }) => {
    const { project, state } = p;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{project}</td>
            <td> {state} </td>
        </tr>
    );
};

export default MyProjectRow;