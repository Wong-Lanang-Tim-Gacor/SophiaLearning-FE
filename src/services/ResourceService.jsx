import api from "@/services/Api.jsx";

const getResource = async (id) => {
    return await api.get(`resources/class/${id}`)
        .then(res => res.data)
}
const showResource = async (id) => {
    return await api.get(`resources/data/${id}`)
        .then(res => res.data)
}
const getAnnouncement = async () => {
    return await api.get('resources/announcements')
        .then(res => res.data)
}

const getMaterial = async () => {
    return await api.get('resources/materials')
        .then(res => res.data)
}

const storeAnnouncement = async (data) => {
    return await api.post('resources/data', data)
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

export {
    getResource,
    showResource,
    getAnnouncement,
    getMaterial,
    storeAnnouncement,
    storeResource,
}