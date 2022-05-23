import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Enrollment = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const navigate = useNavigate();
    const url = `https://nameless-sea-82062.herokuapp.com/project/${id}`;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: project, isLoading } = useQuery('project', () => fetch(url).then(res => res.json()));
    const onSubmit = data => {
        const enroll = {
            email: user?.email,
            project: project?.name,
            state: 'Open'
        };
        fetch(`https://nameless-sea-82062.herokuapp.com/enroll/${project._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(enroll)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Congratulations! Project enroll successfully!!')
                    console.log(data);
                    navigate('/');

                }
                else {
                    toast.error('You enrolled project already!');
                }
            })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-10'>
            <h1 className="text-2xl font-semibold mx-4">Confirm Enrollment</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-indigo-400 rounded-xl mt-6 lg:w-1/2 p-12 mx-4">
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="text" disabled value={user?.email || ''} className="w-full px-4 py-3 rounded-lg bg-gray-300 mt-2 border"
                        {...register("name")} />
                </div>
                <div>
                    <label className="block text-gray-700">Project Name</label>
                    <input type="text" value={project?.name} disabled placeholder="Enter Project Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        {...register("projectName")} />
                </div>
                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Enroll</button>
            </form>
        </div>
    );
};

export default Enrollment;