import React, { useEffect, useState } from 'react';

import {
  Dialog, DialogActions, DialogContent, Slide,
} from '@mui/material';
import { DialogTitle } from '@material-ui/core';
import Button from '@mui/material/Button';
import DivMargin10TopBot from '../UI/Atoms/Div/DivMargin10TopBot';
import ErrorP from '../UI/Atoms/Paragraph/ErrorP';

import {
  validateEmail, validateFullName, validateUserName,
} from '../Utils/ValidationModule';
import StyledTextField from '../UI/Molecules/StyledTextField';
import editUser from '../API/EditUserRequest';

const { REQUEST_RESPONSES: { FAIL, SUCCESS } } = require('../Constants/Messages');
// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function EditUserDialog({
  open, onClose, id, currentEmail, currentUserName, currentFullName,
}) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');

  const [displayedErrors, setDisplayedErrors] = useState('');
  const [requestError, setRequestError] = useState('');
  const userForUpdate = {
    email,
    fullName,
    userName,
    id,
  };
  const errors = {
    emailError: '',
    fullNameError: '',
    userNameError: '',
  };

  useEffect(() => {
    setEmail(currentEmail);
    setUserName(currentUserName);
    setFullName(currentFullName);
  }, [currentEmail, currentUserName, currentFullName]);

  const validationCheck = () => {
    errors.emailError = validateEmail(email);
    errors.fullNameError = validateFullName(fullName);
    errors.userNameError = validateUserName(userName);
    setDisplayedErrors(Object.values(errors).filter((error) => error !== '').join('\n'));
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = validationCheck();
    setRequestError(null);
    if (!status) return false;
    const updateUserRequest = await editUser(userForUpdate);
    if (updateUserRequest.status === FAIL) {
      return setRequestError(updateUserRequest.errors.flat().join('\n'));
    }
    return setRequestError(SUCCESS);
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
        setRequestError(null);
      }}
      TransitionComponent={Transition}
    >
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <StyledTextField
          label="Email"
          name="email"
          value={email}
          required={false}
          onChange={
              (e) => setEmail(e.target.value)
            }
        />
        <StyledTextField
          label="Full name"
          name="fullName"
          value={fullName}
          required={false}
          onChange={
              (e) => setFullName(e.target.value)
            }
        />
        <StyledTextField
          label="Username"
          name="userName"
          value={userName}
          required={false}
          onChange={
              (e) => setUserName(e.target.value)
            }
        />
        <DivMargin10TopBot>
          <ErrorP>
            {requestError}
          </ErrorP>
          <ErrorP>
            {displayedErrors}
          </ErrorP>
        </DivMargin10TopBot>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          onClose();
          setRequestError(null);
        }}
        >Cancel
        </Button>
        <Button
          onClick={handleSubmit}
        >Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
