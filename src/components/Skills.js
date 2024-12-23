import { Box, FormControl, InputLabel, MenuItem, Select, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import objects from '../objectClassifications/objects.json'
import SkillsIcons from '../elements/SkillsIcons';


function Skills() {
    const filterOptions = ['Languages', 'Frameworks', 'Tools']
    const [filter, setFilter] = useState('');

    const handleChange = (event) => {
      setFilter(event.target.value);
    };

    function getFilterTitle(s){
        if(s == "plang")
            return filterOptions[0]
        else if(s == "frwork"){
            return filterOptions[1]
        }
        else
            return filterOptions[2]
    }

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
    <div
    style={{ 
        display: 'flex', 
        flexDirection: 'column',  // Change flexDirection to column to stack items
        alignItems: 'center',     // Center align horizontally
        justifyContent: 'center'  // Center align vertically
    }}
>   
<FormControl sx={{ m: 1, minWidth: 120 }} size="small" data-aos="fade-up">
      <InputLabel id="demo-select-small-label">Filter by...</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filter}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value={"plang"}>Languages</MenuItem>
        <MenuItem value={"frwork"}>Frameworks</MenuItem>
        <MenuItem value={"tool"}>Tools</MenuItem>
      </Select>
    </FormControl>
    {
        filter ? (
            <div>
            <Typography  
            variant="h6" 
            component="h6" 
            data-aos="fade-up" 
            sx={{
                fontFamily: 'Bruno Ace SC, serif', 
                fontStyle: 'normal', 
                color: '#7BAFD4'
            }}
        > 
        {getFilterTitle(filter)}
        </Typography>
        <Box paddingTop={5}>
                <SkillsIcons skills={objects.Skills} animate="true" filter={filter}/>
        </Box>
        </div>
        ):(
            <div>
                <Typography  
            variant="h6" 
            component="h6" 
            data-aos="fade-up" 
            sx={{
                fontFamily: 'Bruno Ace SC, serif', 
                fontStyle: 'normal', 
                color: '#7BAFD4'
            }}
        >
            Languages
        </Typography>
        <Box paddingTop={5}>

            
                <SkillsIcons skills={objects.Skills} animate="true" filter="plang"/>
            
        </Box>
        
        <Typography  
            variant="h6" 
            component="h6" 
            data-aos="fade-up" 
            sx={{
                fontFamily: 'Bruno Ace SC, serif', 
                fontStyle: 'normal', 
                color: '#7BAFD4'
            }}
        >
            Frameworks
        </Typography>
        <Box paddingTop={5}>
            <SkillsIcons skills={objects.Skills} animate="true" filter="frwork"/>  
        </Box>
        
        <Typography  
            variant="h6" 
            component="h6" 
            data-aos="fade-up" 
            sx={{
                fontFamily: 'Bruno Ace SC, serif', 
                fontStyle: 'normal', 
                color: '#7BAFD4'
            }}
        >
            Tools
        </Typography>
        <Box paddingTop={5}>
            <SkillsIcons skills={objects.Skills} animate="true" filter="tool"/>  
        </Box>
        </div>
        )
    }
    
    
</div>

    );
}

export default Skills;