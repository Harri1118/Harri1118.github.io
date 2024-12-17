// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

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
    <AppBar position={isAtBottom ? "relative" : "fixed"} sx={{transition: 'position 0.3s ease' }}>
      <Toolbar>

        {/* Desktop Menu */}
        {!isMobile && (
          <div>
            <Button component={Link} to="header" smooth={true} duration={500} offet={-40} sx={{ color: 'white' }}>
              Summary
            </Button>
            <Button component={Link} to="projects" smooth={true} duration={500} offet={-40} sx={{ color: 'white' }}>
              Projects
            </Button>
            <Button component={Link} to="work-experience" smooth={true} duration={500} sx={{ color: 'white' }}>
              Work Experience
            </Button>
            <Button component={Link} to="skills" smooth={true} duration={500} sx={{ color: 'white' }}>
              Skills
            </Button>
            <Button component={Link} to="skills" smooth={true} duration={500} sx={{ color: 'white' }}>
              Contact me
            </Button>
          </div>
        )}

        {/* Mobile Menu Button (Hamburger Icon) */}
        {isMobile && (
          <IconButton edge="end" color="inherit" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
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
