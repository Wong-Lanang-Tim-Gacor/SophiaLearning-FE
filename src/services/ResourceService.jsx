import api from "@/services/Api.jsx";

const getResource = async (id) => {
    return await api.get(`resources/class/${id}`)
        .then(res => res.data)
}
const showResource = async (id) => {
    return await api.get(`resources/data/${id}`)
        .then(res => res.data)
}
const storeResource = async (data) => {
    return await api.post(`/resources/data`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        return response.data
    })
}
const updateResource = async (id,data) => {
    return await api.post(`/resources/data/${id}?_method=PUT`, data, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        return response.data
    })
}

const storeChat = async (data) => {
    return await api.post(`resources/chat`, data)
        .then(res => {
            return res.data
        })
}

const getAnswerByResource = async (id) => {
    return await api.get(`/resources/assignments/answers/by-resource/${id}`)
        .then(res => res.data)
}

const updateAnswer = async (id,data) => {
    return await api.put(`/resources/answer/${id}`, data).then(response => {
        return response.data
    })
}

export {
    getResource,
    showResource,
    storeChat,
    storeResource,
    updateResource,
    updateAnswer,
    getAnswerByResource
}