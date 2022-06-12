import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

let useStyles;

export default function WideButton({
  type, span, text, onClick, disabled,
}) {
  const classes = useStyles();

  return (
    <Button
      type={type}
      onClick={onClick}
      variant="contained"
      color="primary"
      disabled={disabled}
      className={classes.button}
      fullWidth
      sx={{
        textTransform: 'none',
        backgroundColor: '#0095f6',
        padding: '5px 9px',
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: '600',
        border: '1px solid transparent',
      }}
    >
      {span}
      {text}
    </Button>
  );
}

useStyles = makeStyles({
  button: {
    '&:disabled': {
      color: '#fff !important',
      backgroundColor: 'rgba(0,149,246,.3) !important',
    },
  },
});
