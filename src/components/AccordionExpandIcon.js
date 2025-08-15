import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SkillsIcons from 'components/SkillsIcons'

export default function AccordionExpandIcon(props) {
    const {skills} = props
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4'}}>Skills acquired</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SkillsIcons skills={skills}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
