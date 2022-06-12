import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

let useStyles;

const PasswordTextField = ({
  value,
  label,
  onChange,
  onBlur,
  name,
  type,
}) => {
  const [showPassword, setShowPassword] = useState(type !== 'password');
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles();
  return (
    <FormControl
      required
      variant="filled"
      size="small"
      fullWidth
      className={classes.root}
      sx={{
        margin: '0 0 8px 0',
        border: '1px solid #dbdbdb',
        borderRadius: '3px',
        backgroundColor: '#fafafa',
      }}
    >
      <InputLabel
        sx={{
          fontSize: '12px',
        }}
        htmlFor="standard-adornment-password"
      >
        {label}
      </InputLabel>
      <Input
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        type={showPassword ? 'text' : 'password'}
        value={value}
        required
        sx={{
          fontSize: '12px',
        }}
        endAdornment={
          type === 'password'
            && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
            )
        }
      />
    </FormControl>
  );
};
export default PasswordTextField;

useStyles = makeStyles({
  root: {
    '& .MuiInputLabel-filled.Mui-focused': {
      color: '#8e8e8e',
    },
    '& .MuiInput-input': {
      padding: '21px 12px 4px 12px',
    },
    '& .MuiInputBase-root.MuiInput-root': {
      backgroundColor: '#fafafa',
      margin: '0',
    },
    '& .MuiInputBase-root.MuiInput-root:before': {
      border: 'none !important',
    },
    '& .MuiInputBase-root.MuiInput-root:after': {
      border: 'none !important',
    },
    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-error': {
      color: '#8e8e8e',
    },
    '& .MuiFormLabel-asterisk.Mui-error': {
      color: '#8e8e8e',
    },
  },
});
