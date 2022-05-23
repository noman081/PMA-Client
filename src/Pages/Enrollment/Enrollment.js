import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
const Enrollment = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-indigo-400 rounded-xl mt-6 lg:w-1/2 p-12 mx-4">
                <div>
                    <label className="block text-gray-700">Project Name</label>
                    <input type="text" value={email} disabled placeholder="Enter Project Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Project Name is Required'
                            }
                        })} />
                </div>
                <div>
                    <label className="block text-gray-700">Project Name</label>
                    <input type="text" name="" id="" placeholder="Enter Project Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Project Name is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Enrollment;