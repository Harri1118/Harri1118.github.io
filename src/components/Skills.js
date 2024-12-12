import MediaCard from '../elements/MediaCard';
import { Typography, Box, IconButton, Link } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Grid2 } from '@mui/material';

function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Typography variant="h3" component="h3" data-aos="fade-in" fontFamily={"Ring of Kerry, sans-serif"}>
                Skills
            </Typography>
        </div>
    );
}

export default Skills;