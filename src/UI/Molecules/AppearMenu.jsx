import React from 'react';
import {
  Divider, ListItemIcon, Menu, MenuItem,
} from '@material-ui/core';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import SettingsIcon from '@mui/icons-material/Settings';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const AppearMenu = ({ anchorEl, handleClose, open }) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
      elevation: 1,

    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
  >  <Divider />
    <MenuItem>
      <ListItemIcon>
        <AccountCircleOutlinedIcon fontSize="small" />
      </ListItemIcon>
      Profile
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <TurnedInNotIcon fontSize="small" />
      </ListItemIcon>
      Saved
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <SettingsIcon fontSize="small" />
      </ListItemIcon>
      Settings
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <ChangeCircleIcon fontSize="small" />
      </ListItemIcon>
      Change Account
    </MenuItem>
    <MenuItem style={{ borderTop: 'solid rgba(var(--b38,219,219,219),1) 2px' }}>
      Logout
    </MenuItem>
  </Menu>
);

export default AppearMenu;
