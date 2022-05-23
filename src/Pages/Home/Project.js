import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, name, img, state, description, member } = project;
    const navigate = useNavigate();
    const handleEnroll = () => {
        navigate(`/enrollment/${_id}`);
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl'>State: {state}</p>
                <p>{description}</p>
                <div className="card-actions">
                    <button onClick={handleEnroll} disabled={!(state === 'Open')} className="btn btn-primary">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default Project;