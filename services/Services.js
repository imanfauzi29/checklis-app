import axios from "axios"

const URL = "http://18.139.50.74:8080"
const TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg"
const headers = { Authorization: `Bearer ${TOKEN}` }

const login = ({ body }) => {
    return axios
        .post(`${URL}/login`, body)
        .then((res) => res.data)
        .catch((e) => console.log(e.message()))
}

const register = ({ body }) => {
    return axios
        .post(`${URL}/register`, body)
        .then((res) => res.data)
        .catch((e) => console.log(e.message()))
}

const getAllChecklist = () => {
    return axios
        .get(`${URL}/checklist`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        })
        .then((res) => res.data)
        .catch((e) => console.log(e))
}

const saveChecklist = ({ body }) => {
    return axios
        .post(`${URL}/checklist`, body, {
            headers
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e.message))
}

const deleteChecklist = ({ id }) => {
    return axios
        .delete(`${URL}/checklist`, {
            headers
        })
        .then((res) => res.data)
        .catch((e) => console.log(e))
}

const getItemById = ({ id }) => {
    return axios
        .get(`${URL}/item/${id}`, { headers })
        .then((res) => res.data)
        .catch((e) => console.log(e))
}

const saveItem = ({ body }) => {
    return axios
        .post(`${URL}/item`, body, { headers })
        .then((res) => res.data)
        .catch((e) => console.log(e))
}

const updateItemStatus = ({ id }) => {
    return axios
        .put(`${URL}/item/${id}`, { headers })
        .then((res) => res.data)
        .catch((e) => console.log(e))
}

const deleteItem = ({ id }) => {
    return axios
        .delete(`${URL}/item/${id}`, { headers })
        .then((res) => res.data)
        .catch((e) => console.log(e))
}

const renameItem = ({ id, body }) => {
    return axios
        .put(`${URL}/item/rename/${id}`, body, { headers })
        .then((res) => res.data)
        .catch((e) => console.log(e))
}

export {
    login,
    register,
    getAllChecklist,
    saveChecklist,
    deleteChecklist,
    getItemById,
    saveItem,
    updateItemStatus,
    deleteItem,
    renameItem
}
