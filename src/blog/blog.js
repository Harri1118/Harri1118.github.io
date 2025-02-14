import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Blog = () => {
    const filterOptions = ['Technology', 'Writing', 'Videogames'];
    const timeFrame = useState(false)
    const [filter, setFilter] = useState('all');
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <div className="container">
            <label>Welcome to my blog!</label>
            <br />
            <br />
            <FormControl sx={{ m: 1, width: "10%" }} size="small">
                <Box sx={{ marginBottom: 2 }}> {/* Adding a custom space between label and select */}
                    <InputLabel id="demo-select-small-label">Filter by...</InputLabel>
                </Box>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"all"}>Technology</MenuItem>
                    <MenuItem value={"all"}>Writing</MenuItem>
                    <MenuItem value={"all"}>Video Games</MenuItem>

                </Select>
                <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                >
                    <FormControlLabel value="rec" control={<Radio />} label="Most recent" />
                    <FormControlLabel value="old" control={<Radio />} label="Oldest" />
                </RadioGroup>
                {/* <Button>Apply</Button> */}
            </FormControl>

            <div id="blogsSection">

            </div>
        </div>
    );
}

export default Blog;
