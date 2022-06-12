import requestInstance from './index';

const {
  ROUTES: {
    ADMIN, DELETE_USER,
  },
} = require('../Constants/ServerRoutes');

// DELETE /admin/delete-user/:_id
export default async function deleteUser(_id) {
  const deleteUserRequest = await requestInstance.delete(ADMIN + DELETE_USER + _id);
  return deleteUserRequest.data;
}
