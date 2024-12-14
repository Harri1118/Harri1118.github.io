import { useEffect, useRef } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Paper, Typography, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import AOS from 'aos'
import '../css/WorkExperience.css'
function WorkExperience() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
          AOS.init({ duration: 1000 });
      }, []);
  return (
    <Timeline data-aos="fade-up">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" data-aos="fade-in">
            2011 - present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: 'rgb(33, 150, 243)', color: '#fff'}}>
            <Typography variant="h6" component="h1">
              Creative Director
            </Typography>
            <Typography>Miami, FL</Typography>
            <Typography>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent>
          <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: 'rgb(33, 150, 243)', color: '#fff' }}>
            <Typography variant="h6" component="h1">
              Art Director
            </Typography>
            <Typography>San Francisco, CA</Typography>
            <Typography>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</Typography>
          </Paper>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" data-aos="fade-in">
            2010 - 2011
          </Typography>
        </TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" data-aos="fade-in">
            2008 - 2010
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: 'rgb(33, 150, 243)', color: '#fff' }}>
            <Typography variant="h6" component="h1">
              Web Designer
            </Typography>
            <Typography>Los Angeles, CA</Typography>
            <Typography>User Experience, Visual Design</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent>
          <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: 'rgb(33, 150, 243)', color: '#fff' }}>
            <Typography variant="h6" component="h1">
              Web Designer
            </Typography>
            <Typography>San Francisco, CA</Typography>
            <Typography>User Experience, Visual Design</Typography>
          </Paper>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" data-aos="fade-in">
            2006 - 2008
          </Typography>
        </TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" data-aos="fade-in">
            April 2013
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: 'rgb(233, 30, 99)', color: '#fff' }}>
            <Typography variant="h6" component="h1">
              Content Marketing for Web, Mobile and Social Media
            </Typography>
            <Typography>Online Course</Typography>
            <Typography>Strategy, Social Media</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent>
          <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: 'rgb(233, 30, 99)', color: '#fff' }}>
            <Typography variant="h6" component="h1">
              Agile Development Scrum Master
            </Typography>
            <Typography>Certification</Typography>
            <Typography>Creative Direction, User Experience, Visual Design</Typography>
          </Paper>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" data-aos="fade-in">
            November 2012
          </Typography>
        </TimelineOppositeContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary" data-aos="fade-in">
            2002 - 2006
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: 'rgb(233, 30, 99)', color: '#fff' }}>
            <Typography variant="h6" component="h1">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </Typography>
            <Typography>Bachelor Degree</Typography>
            <Typography>Creative Direction, Visual Design</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success">
            <StarIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Box display="flex" justifyContent="center"/>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default WorkExperience;