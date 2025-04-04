import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button, Link, useMediaQuery } from '@mui/material';
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

export default function NestedModal(props) {
  const {title, description, image, date, link, youtubeLink, skills} = props
  const skillObjs = []
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    putData()
  }, [skills]);

  function putData(){
    let Skills = SkillsObjects.Skills
    for(let skillEntry of Skills){
      if(skills.includes(skillEntry.title)){
        skillObjs.push(skillEntry)
      }
    }
  }

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
        {
          (image != null) && !isMobile && 
            <Box
            component="img"
            loading="lazy"
            src={image}
            sx={{height: "50%", justifyContent: "center" }}
            />
            
        }
                {
          (image != null) && isMobile && 
            <Box
            component="img"
            loading="lazy"
            src={image}
            sx={{height: "30%", justifyContent: "center" }}
            />
            
        }
        {
          (youtubeLink != null) &&
            <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
              fontFamily: 'Bruno Ace SC, serif', 
              fontStyle: 'normal', 
              color: '#7BAFD4',
            }}
            ><ReactPlayer url={youtubeLink}/></Box>
        }
        <Typography variant="body1" id="parent-modal-description" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>
            {date}
        </Typography>
        { !isMobile &&
        <Typography variant="body1" id="parent-modal-description" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', textAlign: 'left', paddingLeft: "20%", paddingRight: "20%", paddingTop: "5%", paddingBottom: "4%"}}>
            {description}
        </Typography>
        }
        { isMobile &&
        <Typography variant="body1" id="parent-modal-description" sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', textAlign: 'left', paddingLeft: "2%", paddingRight: "2%", paddingTop: "5%", paddingBottom: "7%"}}>
            {description}
        </Typography>
        }
        {
          link != "" && 
          <Link href={link} target="_blank" rel="noopener noreferrer">
          Click here to view repo
          </Link>
        }
        <br/>
        {putData()}
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
        >
        <AccordionExpandIcon skills={skillObjs} />
        </Box>
        <br/>
        <Button onClick={handleClose} sx={{paddingBottom: "20px"}}>Close</Button>
            </Box>
      </Modal>
      
      
    </div>
  );
}