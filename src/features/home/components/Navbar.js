import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import NavBarButton from 'components/NavBarButton';
import { useNavigate } from 'react-router-dom';

const Navbar = React.memo(function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const LABELS = ["Summary","Projects","Work Experience","Skills","Contact me", "View my blog"] // add 'Play game'
  const TO = ["header","projects","work-experience","skills","footer", "/?redirect=/blog"] // add ?redirect=/gm
  const LINKS = ["false","false","false","false","false", "true"] // add true
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
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
            {
              LABELS.map((text, index) => (
                <NavBarButton to={TO[index]} text={text} isLink={LINKS[index]}/>
              ))
            }
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
          {LABELS.map((text, index) => (
            <ListItem button key={index}>
              <ListItemText>
                <NavBarButton to={TO[index]} text={text} isLink={LINKS[index]}/>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
})

export default Navbar;