import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import NavBarButton from '../elements/NavBarButton';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();

  // Track scroll position to check if the user is at the bottom
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

  // Toggle the drawer open/close
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };


  return (
    <AppBar 
      position={isAtBottom ? "relative" : "fixed"} 
      sx={{
        transition: 'position 0.3s ease',
        background: 'transparent',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

        {/* Container for navbar buttons with fixed width */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          width: '80%',  // Adjust the width as per your needs (e.g., 80% of the screen width)
          maxWidth: '1200px', // Maximum width for large screens
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Background color for the "box" around buttons
          padding: '10px 20px',  // Padding inside the "box"
          borderRadius: '8px', // Optional: rounded corners for the box
        }}>
          {/* Desktop Menu */}
          {!isMobile && (
            <>
              <NavBarButton to="header" text="Summary"/>
              <NavBarButton to="projects" text="Projects"/>
              <NavBarButton to="work-experience" text="Work Experience"/>
              <NavBarButton to="skills" text="Skills"/>
              <NavBarButton to="skills" text="Contact me"/>
              {/* <Button onClick={() => navigate('/gm')}>
                Play
              </Button> */}
            </>
          )}

          {/* Mobile Menu Button (Hamburger Icon) */}
          {isMobile && (
            <IconButton edge="end" color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </div>
      </Toolbar>

      {/* Mobile Drawer (Hamburger Menu) */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
          <ListItem button>
            <ListItemText>
              <Button component={Link} to="header" smooth={true} duration={500} sx={{ color: 'black' }}>
                Summary
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Button component={Link} to="projects" smooth={true} duration={500} sx={{ color: 'black' }}>
                Projects
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Button component={Link} to="work-experience" smooth={true} duration={500} sx={{ color: 'black' }}>
                Work Experience
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Button component={Link} to="skills" smooth={true} duration={500} sx={{ color: 'black' }}>
                Skills
              </Button>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <Button component={Link} to="skills" smooth={true} duration={500} sx={{ color: 'black' }}>
                Contact me
              </Button>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
