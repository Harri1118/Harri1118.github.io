import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import HtmlModal from '../../components/HtmlModal';

const AnimatedCard = styled(Card)(({ theme }) => ({
  width: 270, // Fixed width for all cards
  height: 210, // Fixed height for all cards
  transition: 'transform 0.2s, box-shadow 0.3s',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  overflow: 'hidden',
  '&.aos-init.aos-animate:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
  '&.aos-init.aos-animate:active': {
    transform: 'scale(1.1)',
    boxShadow: theme.shadows[12],
  },
}));

const BackgroundImage = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.8,
  zIndex: 0,
});

const ContentWrapper = styled('div')({
  position: 'relative',
  zIndex: 1,
  height: "100%",
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional: Add a semi-transparent background to enhance text legibility
});

export default function BlogCard(props) {
  const { title, body, image, date, short_description} = props;

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const DDate = new Date(date)
    console.log(DDate)
  }, []);

  return (
    <AnimatedCard data-aos="fade-up">
      <BackgroundImage style={{ backgroundImage: `url(${image})` }} />
      <ContentWrapper>
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: 'Bruno Ace SC, serif',
              fontStyle: 'normal',
              color: '#7BAFD4',
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 2, // Ensures it doesn't exceed two lines
              WebkitBoxOrient: 'vertical',
              height: '3.2em', // Adjust based on line height
              lineHeight: 1.6,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontFamily: 'Bruno Ace SC, serif',
              fontStyle: 'normal',
              color: '#7BAFD4',
            }}
          >
            {short_description}
          </Typography>
          <HtmlModal title={title} date={date} body={body}/>
        </CardContent>
      </ContentWrapper>
    </AnimatedCard>
  );
}