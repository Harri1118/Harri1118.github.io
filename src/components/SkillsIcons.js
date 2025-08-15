import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { Typography, useMediaQuery } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  height: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function SkillsIcons(props) {
  const { skills, filter } = props;
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div>
    {
      !isMobile && skills != "none" &&
      <Box 
      container
      sx={{ width: 500, minHeight: "auto", paddingBottom: 5, paddingLeft: 5, justifyContent: "center" }}
    >
      <Masonry columns={4} spacing={2}>
        {skills.map((skill, index) => ((filter !== "" && skill.type === filter) || !filter) &&
          <Item key={index}
            sx={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              component="img"
              src={skill.image}
              sx={{
                width: '70%',
                height: '70%',
                objectFit: 'resize',
                borderRadius: 1,
              }}
            />
            <Typography sx={{ fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4' }}>
              {skill.title}
            </Typography>
          </Item>
        )}
      </Masonry>
    </Box>
    }
    {isMobile && skills != "none" &&
        <Box 
        container
        sx={{ width: 300, minHeight: "auto", paddingBottom: 5}}
      >
        <Masonry columns={4} spacing={2}>
          {skills.map((skill, index) => ((filter !== "" && skill.type === filter) || !filter) &&
            <Item key={index}
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                component="img"
                src={skill.image}
                sx={{
                  width: '100%',
                  height: '70%',
                  objectFit: 'resize',
                  borderRadius: 1,
                }}
              />
              <Typography sx={{ fontFamily: 'Bruno Ace SC, serif', fontStyle: 'normal', color: '#7BAFD4', fontSize: '1.5vh' }}>
                {skill.title}
              </Typography>
            </Item>
          )}
        </Masonry>
      </Box>
    }
    </div>
  );
}