import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import NestedModal from './NestedModal';
import '../App.css'
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

export default function MediaCard(props) {
  const {title, description, image, date, link, youtubeLink, skills} = props

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <AnimatedCard data-aos="fade-up">
      <CardMedia
        sx={{ height: 140}}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <NestedModal size="small" title={title} description={description} image={image} date={date} link={link} youtubeLink={youtubeLink} skills={skills}/>
      </CardActions>
    </AnimatedCard>
  );
}