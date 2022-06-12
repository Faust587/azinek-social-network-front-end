import axios from 'axios';
import store from '../Store';
// eslint-disable-next-line import/no-cycle
import requestInstance from './index';
import { signInAction } from '../Store/UserReducer';
import { ROUTES } from '../Constants/ServerRoutes';

export const findUsers = async (userName) => {
  try {
    const response = await requestInstance.get(`${ROUTES.SEARCH_USER}/${userName}`);
    return response.data;
  } catch (e) {
    return [];
  }
};

export const refreshUserToken = async () => {
  try {
    const response = await axios.post(process.env.REACT_APP_API_URL + ROUTES.REFRESH_TOKEN,
      {},
      {
        headers: {
          Authorization: `Bearer ${store.getState().userStorage.refreshToken}`,
        },
      });
    store.dispatch(signInAction(response.data));
    return true;
  } catch (e) {
    return false;
  }
};
