import api from "@/services/Api"

const getClassroom = async () => {
    return await api.get("/classrooms/user/joined")
        .then((response) => {
            if (response.status === 200) return response.data.data

            console.log(response.data.data)
        })
}

const showClassroom = async (id) => {
    return await api.get(`/classrooms/${id}`)
        .then((response) => {
            if (response.status === 200) return response.data
        })

}


const storeClassroom = async (data) => {
    return await api.post('/classrooms', data)
        .then((response) => {
            if (response.data.meta.code === 201) return response.data
        })
}

const joinClassroom = async (classroomCode) => {
    return await api.post(`/classrooms/${classroomCode}/join`)
        .then((response) => {
            if (response.data.meta.code === 200) return response.data
        })
}

const updateClassroom = async (id, data) => {
    return await api.put(`/classrooms/${id}`, data)
        .then((response) => {
            if (response.status === 200) return response.data.data
        })
}

const archiveClassroom = async (id) => {
    return await api.put(`/classrooms/${id}`,{
        is_archived: true,
    }).then(response => {
        return response.data
    })
}

export {
    getClassroom,
    showClassroom,
    updateClassroom,
    storeClassroom,
    joinClassroom,
    archiveClassroom,
}