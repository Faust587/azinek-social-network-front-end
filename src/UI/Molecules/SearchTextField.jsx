import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';

const SearchTextField = () => (
  <TextField
    label="Search"
    InputProps={{
      endAdornment: (
        <InputAdornment>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

export default SearchTextField;
