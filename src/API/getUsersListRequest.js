import axios from 'axios';
import store from '../Store';

import requestErrorsHandler from '../Utils/RequestErrorsHandler';

const { ROUTES: { USER_LIST } } = require('../Constants/ServerRoutes');

const server = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// POST /admin/users-list
export default async function getUsersList() {
  try {
    const usersList = await server.get(USER_LIST, {
      headers: {
        Authorization: `Bearer ${store.getState().userStorage.accessToken}`,
      },
    });
    return usersList.data;
  } catch (err) {
    return requestErrorsHandler(err);
  }
}
