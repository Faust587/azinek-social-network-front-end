import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

let useStyles;

export default function StyledTextField({
  label,
  onChange,
  onBlur,
  name,
  type,
  value,
  required = true,
}) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      variant="filled"
      size="small"
      inputProps={{ style: { fontSize: 12 } }}
      required={required}
      InputLabelProps={{ style: { fontSize: 12 } }}
      name={name}
      type={type}
      value={value}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      fullWidth
      sx={{
        margin: '0 0 8px 0',
        fontSize: '12px',
        border: '1px solid #dbdbdb',
        borderRadius: '3px',
        backgroundColor: '#fafafa',
      }}
    />
  );
}

useStyles = makeStyles({

  root: {
    '& .MuiInputLabel-filled.Mui-focused': {
      color: '#8e8e8e',
    },
    '& .MuiInputBase-root.MuiFilledInput-root': {
      backgroundColor: '#fafafa',
    },
    '& .MuiInputBase-root.MuiFilledInput-root:before': {
      border: 'none !important',
    },
    '& .MuiInputBase-root.MuiFilledInput-root:after': {
      border: 'none !important',
    },
  },
});
