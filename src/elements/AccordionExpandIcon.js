import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SkillsIcons from './SkillsIcons'

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
          <Typography>Show Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SkillsIcons skills={skills}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
