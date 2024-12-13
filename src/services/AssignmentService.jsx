import api from "@/services/Api.jsx";

const getAssignmentByClass = async (id) => {
    return await api.get(`/assignments/class/${id}`)
        .then(response => {
            if (response.status === 200) return response.data
        }).catch((error) => {
            console.error(error)
        })
}

export {getAssignmentByClass}