import { Box} from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import objects from '../objectClassifications/objects.json'
import SkillsIcons from '../elements/SkillsIcons';


function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center'
            }}
        >
            <Box paddingTop={5}>
                <SkillsIcons skills={objects.Skills} animate="true"/>  
            </Box>
        </div>
    );
}

export default Skills;