import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';

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

export default function HtmlModal(props) {
  const { title, date, body } = props;
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          fontFamily: 'Bruno Ace SC, serif',
          fontStyle: 'normal',
          color: '#7BAFD4',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
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
        }}
      >
        Learn more
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="html-modal-title"
        aria-describedby="html-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "90%",
            maxWidth: "1000px",
            height: "90vh",
            overflow: 'auto',
            textAlign: "center",
            fontFamily: 'Bruno Ace SC, serif',
            fontStyle: 'normal',
            color: '#7BAFD4',
            backgroundColor: "#000",
            borderRadius: 2
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            id="html-modal-title"
            sx={{ mb: 2, textAlign: "center", color: '#7BAFD4', fontFamily: 'Bruno Ace SC, serif',}}
          >
            {title}
          </Typography>

          {date && (
            <Typography
              variant="body1"
              id="html-modal-description"
              sx={{ mb: 2, color: '#7BAFD4', fontFamily: 'Bruno Ace SC, serif', }}
            >
          {(date && typeof date.toDate === 'function')
          ? date.toDate().toLocaleString()
          : '—'}
            </Typography>
          )}

          {body && (
            <Box
              sx={{
                textAlign: 'left',
                padding: 2,
                maxHeight: '600px',
                overflowY: 'auto',
                border: '1px solid #ccc',
                backgroundColor: '#fdfdfd',
                color: '#000',
                borderRadius: 1,
                mb: 3,
              }}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          )}

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
