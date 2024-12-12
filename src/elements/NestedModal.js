import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button, Link } from '@mui/material';
import objectMap from '../objectClassifications/objects.json'
import { useState } from 'react';
import { useEffect } from 'react';

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
          {/* <h2 id="child-modal-title">Title in a child modal</h2> */}
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

export default function NestedModal(props) {
  const {title, description, image, date, link, youtubeLink, skills} = props
  const skillObjs = []
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    putData()
    console.log(link)
  }, [skills]);

  function putData(){
    let Skills = objectMap.Skills
    for(let skillEntry of Skills){
      if(skills.includes(skillEntry.title)){
        skillObjs.push(skillEntry)
      }
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Learn more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "90%", height: 900, alignContent: "center", textAlign: "center" }}>
            <Typography variant="h2" id="parent-modal-title">
            {title}
            </Typography>
        <Box
            component="img"
            src={image}
            //alt="Girl in a jacket"
            sx={{ width: "30%", height: "50%", justifyContent: "center" }}
        />
        <Typography variant="body1" id="parent-modal-description">
            {date}
        </Typography>
        <Typography variant="body1" id="parent-modal-description">
            {description}
        </Typography>
        <Link href={link} target="_blank" rel="noopener noreferrer" color="#fff">
            Click here to view repo
        </Link>
        <br/>
        <Button>Show skills</Button>
        <br/>
        <Button onClick={handleClose}>Close</Button>
            </Box>
      </Modal>
    </div>
  );
}