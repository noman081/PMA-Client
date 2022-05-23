import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import EnrollmentRow from './EnrollmentRow';

const ConfirmEnrollment = () => {
    const { data: projects, isLoading, refetch } = useQuery('projects', () => fetch('https://nameless-sea-82062.herokuapp.com/project').then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='px-12'>
            <h1 className="text-3xl text-center mt-6">Enrollment State</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>State</th>
                            <th>Member</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map((project, index) => <EnrollmentRow key={project._id} index={index} project={project} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConfirmEnrollment;