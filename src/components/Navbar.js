import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import NavBarButton from '../elements/NavBarButton';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar 
      position={isAtBottom ? "relative" : "fixed"} 
      sx={{
        transition: 'position 0.3s ease',
        background: 'transparent',
        boxShadow: 'none',
        top: 0,  // Ensure the navbar is stuck to the top
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          width: '80%',
          maxWidth: '1200px',
          padding: '10px 20px',
          borderRadius: '8px',
        }}>
          {!isMobile && (
            <>
              <NavBarButton to="header" text="Summary" isLink="false"/>
              <NavBarButton to="projects" text="Projects" isLink="false"/>
              <NavBarButton to="work-experience" text="Work Experience" isLink="false"/>
              <NavBarButton to="skills" text="Skills" isLink="false"/>
              <NavBarButton to="footer" text="Contact me" isLink="false"/>
              {/* <NavBarButton to="/?redirect=/blog" text="View my blog" isLink="true"/>
              <NavBarButton to="/?redirect=/gm" text="Play game" isLink="true"/> */}
              {/* <NavBarButton component="https://harri1118.github.io/?redirect=/gm" text="Play game" isLink="true"/> */}
            </>
          )}

          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={() => toggleDrawer(true)}
              
              sx={{
                position: "fixed",
                top: 10,
                left: 10,
                zIndex: 1300,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </div>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List sx={{ width: 230 }} role="presentation" onClick={() => toggleDrawer(false)}>
          {['Summary', 'Projects', 'Work Experience', 'Skills', 'Contact me'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText>
                <Button component={Link} to={text.toLowerCase().replace(/ /g, '-')} smooth={true} duration={500} sx={{ color: 'white' }}>
                  {text}
                </Button>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;