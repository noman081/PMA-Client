import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/project')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div className='px-12 my-10'>
            <h1 className='text-2xl font-semibold text-center'>Projects</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
                {
                    projects.map(project => <Project key={project._id} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;