import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AOS from 'aos';

const AnimatedCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  transition: 'transform 0.2s, box-shadow 0.3s',
  '&.aos-init.aos-animate:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
  '&.aos-init.aos-animate:active': {
    transform: 'scale(1.1)',
    boxShadow: theme.shadows[12],
  },
}));

export default function MediaCard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <AnimatedCard data-aos="fade-up">
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
        title="Title goes here"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title goes here
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Body goes here
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </AnimatedCard>
  );
}