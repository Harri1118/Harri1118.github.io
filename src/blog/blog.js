import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Grid2, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Blogs from '../objectClassifications/Blogs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MediaCard from '../elements/MediaCard';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const filterOptions = ['Technology', 'Writing', 'Videogames'];
    const [timeFrame, setTimeFrame] = useState('');
    const [filter, setFilter] = useState('all');
    const [isLoaded, setIsLoaded] = useState(false);
    const isMobile = useMediaQuery('(max-width:768px)');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        let filteredBlogs = Blogs.Blogs;
        if (filter !== 'all') {
            filteredBlogs = filteredBlogs.filter(blog => blog.category === filter);
        }
        setBlogs(sortByTimestamp(filteredBlogs, "date"));
        setIsLoaded(true);
    }, [filter, timeFrame]);

    const sortByTimestamp = (jsonArray, timestampKey) => {
        return jsonArray.sort((a, b) => {
            return timeFrame === 'rec'
                ? new Date(b[timestampKey]).getTime() - new Date(a[timestampKey]).getTime()
                : new Date(a[timestampKey]).getTime() - new Date(b[timestampKey]).getTime();
        });
    };

    const handleTimeFrameChange = (event) => {
        setTimeFrame(event.target.value);
    };

    return (
        <div className="container">
            <label>Welcome to my blog!</label>
            <br />
            <br />
            <FormControl sx={{ m: 1, width: "10%" }} size="small">
                <Box sx={{ marginBottom: 2 }}>
                    <InputLabel id="demo-select-small-label">Filter by...</InputLabel>
                </Box>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={filter}
                    onChange={handleChange}
                >
                    <MenuItem value={"all"}>All</MenuItem>
                    <MenuItem value={"tech"}>Technology</MenuItem>
                    <MenuItem value={"write"}>Writing</MenuItem>
                    <MenuItem value={"vg"}>Video Games</MenuItem>
                </Select>
                <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                    value={timeFrame}
                    onChange={handleTimeFrameChange}
                >
                    <FormControlLabel value="old" control={<Radio />} label="Most Recent" />
                    <FormControlLabel value="rec" control={<Radio />} label="Oldest" />
                </RadioGroup>
            </FormControl>

            <div id="blogsSection">
                <label>My blogs</label>
                <Grid2 container spacing={2} justifyContent="center" padding={2}>
                    {blogs.map((blog, index) => (
                        <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
                            <h1>{blog.title}</h1>
                            <object width="100%" height="400" data={blog.link} type="application/pdf">   </object>
                            <label>{blog.date}</label>
                        </Grid2>
                    ))}
                </Grid2>
            </div>
        </div>
    );
};

export default Blog;