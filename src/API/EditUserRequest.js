import requestInstance from './index';

import requestErrorsHandler from '../Utils/RequestErrorsHandler';

const {
  ROUTES: {
    ADMIN, EDIT,
  },
} = require('../Constants/ServerRoutes');

// POST /admin/edit-user
export default async function editUser(userToUpdate) {
  try {
    const {
      userName, fullName, email, id,
    } = userToUpdate;
    const editUserRequest = await requestInstance.put(ADMIN + EDIT, {
      userName, fullName, email, id,
    });
    return editUserRequest.data;
  } catch (err) {
    return requestErrorsHandler(err);
  }
}
