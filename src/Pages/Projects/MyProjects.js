import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyProjectRow from './MyProjectRow';

const MyProjects = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `https://nameless-sea-82062.herokuapp.com/enroll/${email}`;
    const { data: projects, isLoading } = useQuery('myProject', () => fetch(url).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='px-12'>
            <h1 className="text-3xl text-center my-6">My Project</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project, index) => <MyProjectRow key={project._id} index={index} p={project} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProjects;