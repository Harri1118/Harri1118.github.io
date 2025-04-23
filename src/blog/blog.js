import { Box, Button, createTheme, FormControl, FormControlLabel, Grid2, InputLabel, MenuItem, Radio, RadioGroup, Select, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Blogs from '../objectClassifications/Blogs';
import BlogCard from '../elements/BlogCard';
import Footer from '../components/Footer'
import NavBarButton from '../elements/NavBarButton'
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

    var sectionStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: "url(https://e0.pxfuel.com/wallpapers/554/364/desktop-wallpaper-star-trek-and-background-lcars.jpg)",
        backgroundSize: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex",
        position: 'relative'
      };

      const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
        typography: {
          //fontFamily: "'Roboto', sans-serif", // Use the font you want
        },
      });

    return (
        <ThemeProvider theme={darkTheme}>
        <div className="container" style={sectionStyle} >
                        <Typography  variant="h3" component="h2" data-aos="fade-in" justify-content="center" style={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', paddingBottom: "5%"}}>
                          Welcome to my blog!
                        </Typography>
              <NavBarButton to="/?redirect=/" text="Return home" isLink="true"/> 
              <br/>
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
                                                    <Grid2 item xs={12} sm={6} md={4} lg={3}>
                                                        <BlogCard title={blog.title} date={blog.date} shortDescription={blog.shortDescription} image={blog.image} link={blog.link}/>
                                                    </Grid2>
                        </Grid2>
                    ))}
                </Grid2>
                <Box height="1000px"/>
            </div>
            <Footer/>
        </div>
        </ThemeProvider>
    );
};

export default Blog;