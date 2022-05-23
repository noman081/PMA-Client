import React from 'react';

const EnrollmentRow = ({ index, project, refetch }) => {
    const { _id, name, state, member } = project;
    const handleAccept = () => {
        fetch(`http://localhost:5000/project/accept/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })

    }
    const handleComplete = () => {
        fetch(`http://localhost:5000/project/complete/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })

    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td> {state} </td>
            <td>{member}</td>
            <td>
                {
                    state === 'Open' && <button onClick={handleAccept} disabled={!(member >= 3)} class="btn btn-xs btn-success">Accept Project</button>
                }
                {
                    state === 'In progress' && <button onClick={handleComplete} class="btn btn-xs">Declare Complete</button>
                }
                {
                    state === 'Completed' && <p class="text-success">Successfully Completed</p>
                }

            </td>
        </tr>
    );
};

export default EnrollmentRow;