import React, { useState, useEffect } from 'react';

import { CircularProgress } from '@material-ui/core';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

import EditUserDialog from './EditUserDialog';
import getUsersList from '../API/getUsersListRequest';
import deleteUser from '../API/DeleteUserRequest';

const { REQUEST_RESPONSES: { FAIL, SUCCESS } } = require('../Constants/Messages');

function generateRows(users) {
  return users.map((user) => (({
    _id, userName, email, fullName, status,
  }) => ({
    _id, userName, email, fullName, status,
  }))(user));
}

export default function UserControlTable() {
  const [data, setData] = useState({
    users: [],
    status: '',
    loading: true,
  });
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  const [id, setId] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentFullName, setCurrentFullName] = useState('');

  const fetchUsers = async () => {
    const users = await getUsersList();
    if (users.status === FAIL) {
      return setData({ users: [], status: users.errors, loading: false });
    }
    return setData({ users: generateRows(users.result), status: SUCCESS, loading: false });
  };

  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

  const columns = [
    {
      field: '_id', headerName: 'id', type: 'number', flex: 0.9,
    },
    {
      field: 'userName', headerName: 'Username', flex: 0.7,
    },
    {
      field: 'email', headerName: 'email', flex: 0.7,
    },
    {
      field: 'fullName', headerName: 'Full name', flex: 0.7,
    },
    {
      field: 'status', headerName: 'Status', flex: 0.7,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      flex: 0.2,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit user"
          onClick={() => {
            setId(params.row._id);
            setCurrentEmail(params.row.email);
            setCurrentUserName(params.row.userName);
            setCurrentFullName(params.row.fullName);
            openDialog();
          }}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete user"
          onClick={async () => {
            await deleteUser(params.row._id);
            await fetchUsers();
          }}
        />,
      ],
    },
  ];

  useEffect(async () => { await fetchUsers(); }, []);

  if (data.status !== SUCCESS) {
    return (
      <Container>
        {data.loading
          ? <ErrorStatus><CircularProgress /></ErrorStatus>
          : <ErrorStatus>{data.status}</ErrorStatus>}
      </Container>
    );
  }
  return (
    <Container>
      <DataGrid
        getRowId={(row) => row._id}
        rows={data.users}
        columns={columns}
        checkboxSelection
        column
      />
      <EditUserDialog
        open={dialogIsOpen}
        onClose={async () => {
          closeDialog();
          await fetchUsers();
        }}
        id={id}
        currentEmail={currentEmail}
        currentUserName={currentUserName}
        currentFullName={currentFullName}
      />
    </Container>
  );
}

const ErrorStatus = styled.p`  
  position: absolute;
  width: 100px;
  height: 50px;
  top: 50%;
  left: 50%;
  margin-left: -50px; /* margin is -0.5 * dimension */
  margin-top: -25px; 
`;

const Container = styled.div`  
  height: 87vh;
  width: 100vw;
`;
