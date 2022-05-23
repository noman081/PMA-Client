import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch }) => {
    const { email } = user;
    const handleDelete = () => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('User deleted successfully');
                    console.log(data);
                    refetch();
                })
        }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>
                < button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
            </td>
        </tr >
    );
};

export default UserRow;