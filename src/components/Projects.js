import MediaCard from '../elements/MediaCard';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Grid2 } from '@mui/material';
import objects from '../objectClassifications/objects.json'

function Projects() {
    const[projects, setProjects] = useState([])
    useEffect(() => {
        setProjects(objects.Projects)
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Grid2 container spacing={2} justifyContent="center" padding={2}>
            {
                projects.map(
                    project => (
                        <Grid2 item xs={12} sm={6} md={4} lg={3}>
                        <MediaCard title={project.projectTitle} image={project.image} description={project.description} date={project.date} skills ={project.skills}/>
                        </Grid2>
                    )
                )
            }
        </Grid2>
    );
}

export default Projects;