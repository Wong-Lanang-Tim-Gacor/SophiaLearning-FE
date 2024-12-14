import api from "@/services/Api.jsx";

const getResource = async (id) => {
    return await api.get(`resources/class/${id}`)
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

export {
    getResource,
    getAnnouncement,
    getMaterial,
    storeAnnouncement
}