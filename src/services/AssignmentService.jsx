import api from "@/services/Api.jsx";

const getAssignmentByClass = async (id) => {
    return await api.get(`/resources/class/${id}`)
        .then(response => {
            if (response.status === 200) return response.data
        }).catch((error) => {
            console.error(error)
        })
}

const storeAssignment = async (data) => {
    return await api.post(`/resources/data`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        return response.data
    })
}

export {
    getAssignmentByClass,
    storeAssignment,
}