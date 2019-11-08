import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

const NavButton = styled.div`
  width: 100px;
  color: #e3e3e3;
  /* margin: 10px 20px; */
  font-size: 2.8rem;
  transition: all 0.3s;
  &:hover{
      color: white;
  }
`

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div>
      <NavButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <FontAwesomeIcon icon="bars" />
      </NavButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}