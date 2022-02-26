import instance from "../Config/axios"

const service = "users/";
export const getUsers = () => {
    return instance.get(service)
}
export const getUser = (id) => {
    return instance.get(service + id);
}

export const updateUser = (id) => {
    return instance.patch(service + id);
}

export const deleteUser = (id) => {
    return instance.delete(service + id);
}
