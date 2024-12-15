import api from "@/services/Api.jsx";

const getAssignmentByClass = async (id) => {
    return await api.get(`/resources/class/${id}`)
        .then(response => {
            if (response.status === 200) return response.data
        }).catch((error) => {
            console.error(error)
        })
}

const storeAnswer = async (data) => {
    return await api.post('/resources/answer', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(res => {
            return res.data
        })
}
const deleteAssignment = async (id) => {
    return await api.delete(`/resources/data/${id}`)
        .then(response => {
            return response.data
        })
}

export {
    getAssignmentByClass,
    storeAnswer,
    deleteAssignment,
}