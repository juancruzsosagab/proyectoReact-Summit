import instance from "../Config/Axios";

const service = "users/";

export const getUsers = () => {
  return instance.get(service);
};
export const getUser = (id) => {
  return instance.get(service + id);
};

export const updateUser = (id, data) => {
  return instance.patch(service + id, data);
};

export const deleteUser = (id) => {
  return instance.delete(service + id);
};
