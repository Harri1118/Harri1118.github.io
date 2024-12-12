import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button, Link } from '@mui/material';

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

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            Title goes here
            </Typography>
        <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg"
            alt="Girl in a jacket"
            sx={{ width: "30%", height: "50%", justifyContent: "center" }}
        />
        <Typography variant="body1" id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Link href="https://github.com/Harri1118/Harrison-McKenna-Website-Portfolio" target="_blank" rel="noopener noreferrer">
            Click here to view
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