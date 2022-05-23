import React from 'react';
import { useForm } from "react-hook-form";
const AddProjects = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const state = 'Open';
        const member = 0;
        const project = {
            name: data.name,
            img: data.picture,
            description: data.description,
            state,
            member
        }
        fetch('http://localhost:5000/project', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(project);
            });
        reset();
    };
    return (
        <div className='lg:px-20 mt-10'>
            <h1 className="text-2xl font-semibold mx-4">Add a project</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-indigo-400 rounded-xl mt-6 lg:w-1/2 p-12 mx-4">
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

                <div>
                    <label className="block text-gray-700">Project Image Url</label>
                    <input type="text" name="" id="" placeholder="Enter Image Url" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        {...register("picture", {
                            required: {
                                value: true,
                                message: 'Image url is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.picture?.type === 'required' && <span className="label-text-alt text-red-500">{errors.picture.message}</span>}
                    </label>
                </div>
                <div>
                    <label className="block text-gray-700">Project Description</label>
                    <textarea type="text" name="" id="" placeholder="Enter Project Description" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>

                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Add Project</button>
            </form>
        </div>
    );
};

export default AddProjects; 