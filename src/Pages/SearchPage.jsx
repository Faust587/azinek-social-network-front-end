import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import UserSearchCard from '../UI/Templates/UserSearchCard';
import { findUsers } from '../API/UserApi';
import Header from '../Components/Header';

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(async () => {
    if (searchQuery === '') {
      setUsers([]);
      return;
    }
    const usersArray = await findUsers(searchQuery);
    setUsers(usersArray);
  }, [searchQuery]);
  return (
    <>
      <Header />
      <FlexColumnDiv>
        <TextField onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        />
        <FlexColumnDivWithoutMargin>
          {users.length !== 0 ? <h1>Users:</h1>
            : <h1>Users not found</h1>}

          {users.map((user) => (
            <UserSearchCard
              key={user.userName}
              userName={user.userName}
              fullName={user.fullName}
              userImage={user.userImage}
            />
          ))}
        </FlexColumnDivWithoutMargin>
      </FlexColumnDiv>
    </>
  );
};

const FlexColumnDiv = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

const FlexColumnDivWithoutMargin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 70vh;
`;

export default SearchPage;
