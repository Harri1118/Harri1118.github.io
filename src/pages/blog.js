import {
    Box,
    Button,
    createTheme,
    FormControl,
    FormControlLabel,
    Grid2,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    ThemeProvider,
    Typography,
    useMediaQuery,
  } from '@mui/material';
  import React, { useEffect, useState } from 'react';
  import BlogCard from '../elements/BlogCard';
  import Footer from '../components/Footer';
  import NavBarButton from '../elements/NavBarButton';
  import db from '../firebase/firebase';
  import { onSnapshot, collection } from 'firebase/firestore';
<<<<<<<<< Temporary merge branch 1:src/blog/blog.js
  import ParticlesBackGround from '../elements/ParticlesBackground'
=========
  import ParticlesBackGround from 'components/ParticlesBackground'
>>>>>>>>> Temporary merge branch 2:src/pages/blog.js

  const BackgroundBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  }));

  
  const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [timeFrame, setTimeFrame] = useState('');
    const [filter, setFilter] = useState('all');
    const isMobile = useMediaQuery('(max-width:768px)');
  
    const handleChange = (event) => {
      setFilter(event.target.value);
    };
  
    const handleTimeFrameChange = (event) => {
      setTimeFrame(event.target.value);
    };
  
    const sortByTimestamp = (jsonArray, timestampKey) => {
      return jsonArray.sort((a, b) => {
        const aTime = new Date(a[timestampKey]?.toDate?.() ?? a[timestampKey]).getTime();
        const bTime = new Date(b[timestampKey]?.toDate?.() ?? b[timestampKey]).getTime();
        return timeFrame === 'rec' ? bTime - aTime : aTime - bTime;
      });
    };
  
    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, 'blogs'), (snapshot) => {
        let filteredBlogs = snapshot.docs.map((doc) => doc.data());
        if (filter !== 'all') {
          filteredBlogs = filteredBlogs.filter((blog) => blog.category === filter);
        }
        setBlogs(sortByTimestamp(filteredBlogs, 'date'));
      });
      return () => unsubscribe();
    }, [filter, timeFrame]);
  
    const sectionStyle = {
      width: '100%',
      minHeight: '100vh',
      backgroundImage:
        'url(https://e0.pxfuel.com/wallpapers/554/364/desktop-wallpaper-star-trek-and-background-lcars.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem',
    };
  
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });
  
    return (
      <ThemeProvider theme={darkTheme}>
        <div className="container" style={sectionStyle}>
          {/* Title */}
          <Typography
            variant="h3"
            component="h2"
            data-aos="fade-in"
            style={{
              fontFamily: 'Bruno Ace SC, serif',
              color: '#7BAFD4',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            Welcome to my blog!
          </Typography>
  
          {/* Nav button */}
          <NavBarButton to="/?redirect=/" text="Return home" isLink="true" />
          <br />
  
          {/* Filters */}
          <Box
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            alignItems="center"
            justifyContent="center"
            gap={2}
            mb={4}
          >
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel id="filter-label">Filter by...</InputLabel>
              <Select
                labelId="filter-label"
                id="filter-select"
                value={filter}
                onChange={handleChange}
                label="Filter by..."
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="tech">Technology</MenuItem>
                <MenuItem value="write">Writing</MenuItem>
                <MenuItem value="vg">Video Games</MenuItem>
              </Select>
            </FormControl>
  
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="timeframe"
                name="timeframe"
                value={timeFrame}
                onChange={handleTimeFrameChange}
              >
                <FormControlLabel value="old" control={<Radio />} label="Most Recent" />
                <FormControlLabel value="rec" control={<Radio />} label="Oldest" />
              </RadioGroup>
            </FormControl>
          </Box>
  
          {/* Blogs */}
          <Grid2 container spacing={3} justifyContent="center">
            {blogs.map((blog, index) => (
              <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
                <BlogCard
                  title={blog.title}
                  date={blog.date}
                  shortDescription={blog.short_description}
                  image={blog.image_link}
                  body={blog.body}
                />
              </Grid2>
            ))}
          </Grid2>
  
          {/* Footer */}
          <Box mt={8} width="100%">
            <Footer />
          </Box>
        </div>
      </ThemeProvider>
    );
  };
  
  export default Blog;
  