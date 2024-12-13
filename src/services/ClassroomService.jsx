import api from "@/services/Api"

const getClassroom = async () => {
    return await api.get("/classrooms/user/joined")
        .then((response) => {
            if (response.status === 200) return response.data.data

            console.log(response.data.data)
        }).catch((error) => {
            console.error(error)
        })
}

const showClassroom = async (id) => {
    return await api.get(`/classrooms/${id}`)
        .then((response) => {
            if (response.status === 200) return response.data
        })
        .catch((error) => {
            console.error(error)
        })
}


const storeClassroom = async (data) => {
    return await api.post('/classrooms', data)
        .then((response) => {
            if (response.data.meta.code === 201) return response.data
        }).catch((error) => {
            console.error(error)
        })
}

const joinClassroom = async (classroomCode) => {
    return await api.post(`/classrooms/${classroomCode}/join`)
        .then((response) => {
            if (response.data.meta.code === 200) return response.data
        }).catch((error) => {
            console.error(error)
        })
}

const updateClassroom = async (id, data) => {
    return await api.put(`/classrooms/${id}`, data)
        .then((response) => {
            if (response.status === 200) return response.data.data
        }).catch((error) => {
            console.error(error)
        })
}

export {
    getClassroom,
    showClassroom,
    updateClassroom,
    storeClassroom,
    joinClassroom
}