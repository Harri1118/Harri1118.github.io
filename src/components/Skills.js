import { Box, FormControl, InputLabel, MenuItem, Select, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import SkillsObjects from '../objectClassifications/Skills.json'
import SkillsIcons from '../elements/SkillsIcons';

function Skills() {
    const filterOptions = ['Languages', 'Frameworks', 'Tools'];
    const [filter, setFilter] = useState('all');
    const isMobile = useMediaQuery('(max-width:768px)');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    function getFilterTitle(s) {
        if (s == "plang") return filterOptions[0];
        else if (s == "frwork") return filterOptions[1];
        else if (s == "tool") return filterOptions[2];
        else return "NULL";
    }

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
        data-aos="fade-up"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
            {!isMobile &&
                    <FormControl sx={{ m: 1, width: "10%" }} size="small">
                        <Box sx={{ marginBottom: 2 }}> {/* Adding a custom space between label and select */}
                            <InputLabel id="demo-select-small-label">Filter by...</InputLabel>
                        </Box>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={filter}
                            onChange={handleChange}
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"plang"}>Languages</MenuItem>
                            <MenuItem value={"frwork"}>Frameworks</MenuItem>
                            <MenuItem value={"tool"}>Tools</MenuItem>
                        </Select>
                    </FormControl>
            }
            {
                isMobile &&
                    <FormControl sx={{ m: 1, width: "20%" }} size="small">
                        <Box sx={{ marginBottom: 2 }}> {/* Adding a custom space between label and select */}
                            <InputLabel id="demo-select-small-label">Filter by...</InputLabel>
                        </Box>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={filter}
                            onChange={handleChange}
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"plang"}>Languages</MenuItem>
                            <MenuItem value={"frwork"}>Frameworks</MenuItem>
                            <MenuItem value={"tool"}>Tools</MenuItem>
                        </Select>
                    </FormControl>
                
            }
            {
                (filter === 'all') ? (
                    <div>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                fontFamily: 'Bruno Ace SC, serif',
                                fontStyle: 'normal',
                                color: '#7BAFD4'
                            }}
                        >
                            Languages
                        </Typography>
                        <Box paddingTop={5}>
                            <SkillsIcons skills={SkillsObjects.Skills} filter="plang" />
                        </Box>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                fontFamily: 'Bruno Ace SC, serif',
                                fontStyle: 'normal',
                                color: '#7BAFD4'
                            }}
                        >
                            Frameworks
                        </Typography>
                        <Box paddingTop={5}>
                            <SkillsIcons skills={SkillsObjects.Skills} filter="frwork" />
                        </Box>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                fontFamily: 'Bruno Ace SC, serif',
                                fontStyle: 'normal',
                                color: '#7BAFD4'
                            }}
                        >
                            Tools
                        </Typography>
                        <Box paddingTop={5}>
                            <SkillsIcons skills={SkillsObjects.Skills} filter="tool" />
                        </Box>
                    </div>
                ) : (
                    <div>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{
                                fontFamily: 'Bruno Ace SC, serif',
                                fontStyle: 'normal',
                                color: '#7BAFD4'
                            }}
                        >
                            {getFilterTitle(filter)}
                        </Typography>
                        <Box paddingTop={5}>
                            <SkillsIcons skills={SkillsObjects.Skills} animate="true" filter={filter} />
                        </Box>
                    </div>
                )
            }
        
            </div>
    );
}

export default Skills;
