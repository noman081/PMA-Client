import React from 'react';

const EnrollmentRow = ({ index, project, refetch }) => {
    const { _id, name, state, member } = project;
    const handleAccept = () => {
        fetch(`https://nameless-sea-82062.herokuapp.com/project/accept/${_id}`, {
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
        fetch(`https://nameless-sea-82062.herokuapp.com/project/complete/${_id}`, {
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
                    state === 'Open' && <button onClick={handleAccept} disabled={!(member >= 3)} className="btn btn-xs btn-success">Accept Project</button>
                }
                {
                    state === 'In progress' && <button onClick={handleComplete} className="btn btn-xs">Declare Complete</button>
                }
                {
                    state === 'Completed' && <p className="text-success">Successfully Completed</p>
                }

            </td>
        </tr>
    );
};

export default EnrollmentRow;