import MediaCard from '../elements/MediaCard';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Grid2 } from '@mui/material';

function Projects() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <Grid2 container spacing={2} justifyContent="center" padding={2}>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <MediaCard />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <MediaCard />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <MediaCard />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <MediaCard />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <MediaCard />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <MediaCard />
            </Grid2>
            {/* Add more Grid2 items with MediaCard as needed */}
        </Grid2>
    );
}

export default Projects;