import React from 'react';

import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import AppearMenu from './AppearMenu';

const IconMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{
        display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center',
      }}
      >
        <Typography>
          <IconButton size="small" style={{ color: 'black' }}>
            <HomeOutlinedIcon style={{ fontSize: '30px' }} />
          </IconButton>
        </Typography>
        <Typography>
          <IconButton size="small" style={{ color: 'black' }}>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Typography>
        <Typography>
          <IconButton size="small" style={{ color: 'black' }}>
            <AddBoxOutlinedIcon style={{ fontSize: '30px' }} />
          </IconButton>
        </Typography>
        <Typography>
          <IconButton size="small" style={{ color: 'black' }}>
            <ExploreIcon style={{ fontSize: '30px' }} />
          </IconButton>
        </Typography>
        <Typography>
          <IconButton size="small" style={{ color: 'black' }}>
            <FavoriteBorderOutlinedIcon style={{ fontSize: '30px' }} />
          </IconButton>
        </Typography>
        <IconButton onClick={handleClick} size="small" style={{ color: 'black' }}>
          <AccountCircleOutlinedIcon style={{ fontSize: '30px' }} />
        </IconButton>
      </Box>
      <AppearMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
};

export default IconMenu;
