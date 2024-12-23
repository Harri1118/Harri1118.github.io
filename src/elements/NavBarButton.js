import { Button } from "@mui/material"
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

export default function NavBarButton(props){
    const {to, text} = props
return(              
    <Button 
    component={Link} 
    to={to} 
    smooth={true} 
    duration={500} 
    offset={-40} 
    spy={true} 
    activeClass="active"
    sx={{ 
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
    }
    >
    {text}
  </Button>
  )
}
  //export default NavBarButton