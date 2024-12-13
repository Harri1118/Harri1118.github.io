import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  height: 100
}));

export default function SkillsIcons(props) {
  const {skills} = props

  useEffect(() => {
    console.log(skills)
  }, [props]);

  return (
    <Box sx={{ width: 500, minHeight: 393}}>
      <Masonry columns={4} spacing={2}>
        {skills.map((skill, index) => (
          <Item key={index}>
            <Box
              component="img"
              src={skill.image}
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 1,
              }}
            />
            {skill.title}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}