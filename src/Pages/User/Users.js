import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('projects', () => fetch('http://localhost:5000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='px-12'>
            <h1 className="text-3xl text-center mt-6">All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow key={user._id} index={index} user={user} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;