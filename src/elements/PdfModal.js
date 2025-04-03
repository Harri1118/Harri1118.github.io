import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button, Link, useMediaQuery, Grid2 } from '@mui/material';
import SkillsObjects from '../objectClassifications/Skills.json'
import { useEffect } from 'react';
import AccordionExpandIcon from './AccordionExpandIcon';
import ReactPlayer from 'react-player';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <Typography variant="h2" component="h2" data-aos="fade-in" fontFamily={"Ring of Kerry, sans-serif"}>
          Welcome
        </Typography>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function PdfModal(props) {
  const {title, date, link} = props
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleOpen} 
        sx={{
          fontFamily: 'Bruno Ace SC, serif', 
          fontStyle: 'normal', 
          color: '#7BAFD4',
          transition: 'transform 0.3s ease, opacity 0.3s ease', // Add additional styles
          "&:hover": {
            color: '#ffff'
          },
          "&:before": {
            content: "''",
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            height: "2px",
            backgroundColor: "#ffff",
            transform: "scaleX(0)",
            transformOrigin: 'left',
            transition: 'transform 0.3s ease',
          },
          '&:hover::before': {
          transform: "scaleX(1)"
          }
          }}>Learn more</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        
        <Box 
          sx={{ 
            ...style, 
            width: "90%", 
            height: 900, 
            alignContent: "center", 
            textAlign: "center" ,
            overflow: 'auto',
            fontFamily: 'Bruno Ace SC, serif', 
            fontStyle: 'normal', 
            color: '#7BAFD4'
          }}>
            { !isMobile &&
            <Typography variant="h2" id="parent-modal-title"
            sx={{            
              fontFamily: 'Bruno Ace SC, serif', 
              fontStyle: 'normal', 
            }}
            >
            {title}
            </Typography>
            }
            { isMobile &&
            <Typography variant="h3" id="parent-modal-title" 
              sx={{
                paddingTop: "30px",
                paddingBottom: "15px",          
                fontFamily: 'Bruno Ace SC, serif', 
                fontStyle: 'normal', 
              }}>
            {title}
            </Typography>
            }
        <Typography variant="body1" id="parent-modal-description" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
            {date}
        </Typography>
        <br/>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
                            <object width="90%" height="800" data={link} type="application/pdf">   </object>
        </Grid2>
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
        >
        </Box>
        <br/>
        <Button onClick={handleClose} sx={{paddingBottom: "20px"}}>Close</Button>
            </Box>
      </Modal>
      
      
    </div>
  );
}