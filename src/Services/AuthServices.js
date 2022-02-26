import instance from "../Config/axios"

const service = "auth";
export const create = (data) => {
    return instance.post(service + "/signup", data)
}
export const login = (data) => {
    return instance.post(service + "/login", data);
}