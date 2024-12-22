import { useEffect, useRef, useState } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Paper, Typography, Box, CardActions } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import AOS from 'aos';
import '../css/WorkExperience.css';
import objects from '../objectClassifications/objects';
import NestedModal from '../elements/NestedModal';

function chooseBackGround(bg) {
  if (bg === "work") {
    return 'rgb(30, 30, 30)';
  } else if (bg === "education") {
    return 'rgb(233, 30, 99)';
  }
  return '';
}

function chooseColorType(c) {
  if (c === "work") return "primary";
  else if (c === "education") return "secondary";
  return "";
}

function chooseIcon(ic) {
  if (ic === "work") return (<WorkIcon />);
  else if (ic === "education") return (<SchoolIcon />);
}

function WorkExperience() {
  const [jobs, setJobs] = useState([]);
  const elementsRef = useRef([]);

  useEffect(() => {
    setJobs(objects.Jobs);
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

  function displayTimeLineItem(item, index) {
    const isOdd = index % 2 === 1;
    return (
     <div>
        {isOdd ? (
          <TimelineItem>
            <TimelineOppositeContent style={{ display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: chooseBackGround(item.timelineType), color: '#fff' }}>
                <Typography variant="h6" component="h1" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
                  {item.jobTitle}
                </Typography>
                <Typography sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
                  {item.location}
                </Typography>
                <Typography sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
                  {item.description}
                </Typography>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <NestedModal size="small" title={item.jobTitle} description={item.description} skills={item.skills} />
                </CardActions>
              </Paper>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={chooseColorType(item.timelineType)}>
                {chooseIcon(item.timelineType)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="body2" color="textSecondary" data-aos="fade-up" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
                {item.startDate} - {item.endDate}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ) : (
          <TimelineItem>
            <TimelineOppositeContent style={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="body2" color="textSecondary" data-aos="fade-up" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
                {item.startDate} - {item.endDate}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={chooseColorType(item.timelineType)}>
                {chooseIcon(item.timelineType)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ display: 'flex', justifyContent: 'center' }}>
              <Paper elevation={3} data-aos="fade-up" style={{ padding: '6px 16px', background: chooseBackGround(item.timelineType), color: '#fff' }}>
                <Typography variant="h6" component="h1" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
                  {item.jobTitle}
                </Typography>
                <Typography sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
                  {item.location}
                </Typography>
                <Typography sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
                  {item.description}
                </Typography>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <NestedModal size="small" title={item.jobTitle} description={item.description} skills={item.skills} />
                </CardActions>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        )}
    </div>
    );
  }
  
  return (
        <Timeline  data-aos="fade-up">
          {jobs.map((job, index) => displayTimeLineItem(job, index))}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success">
                <StarIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Box display="flex" justifyContent="center" />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
  );
}

export default WorkExperience;
