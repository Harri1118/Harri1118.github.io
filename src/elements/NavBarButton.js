import { Link } from 'react-scroll';
import React from 'react';
import { Button } from '@mui/material';

 const NavBarButton = React.memo(function NavBarButton(props){
    const {to, text, isLink} = props

  const SX = {
      display: "inline",
      fontFamily: 'Bruno Ace SC, serif', 
      fontStyle: 'normal', 
      color: '#7BAFD4',
      transition: 'transform 0.3s ease, opacity 0.3s ease', // Add additional styles
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
  }

return(   
  <div loading="lazy">
    { isLink == "true" &&
    <Button 
    component={Link}
    onClick={() => window.open(to, '_self')} 
    smooth={true} 
    duration={500} 
    offset={-40} 
    spy={true} 
    activeClass="active"
    sx={SX}
    >
    {text}
  </Button>  
  }
      { isLink != "true" &&
    <Button 
    component={Link}
    to={to} 
    smooth={true} 
    duration={500} 
    offset={-40} 
    spy={true} 
    activeClass="active"
    sx={SX}
    >
    {text}
  </Button>  
  }
  </div> 
  )
})

export default NavBarButton