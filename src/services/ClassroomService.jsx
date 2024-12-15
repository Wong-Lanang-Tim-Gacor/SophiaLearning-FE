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
    try {
        const response = await api.post('/classrooms', data);

        // Jika status code adalah 201, kembalikan respons data
        if (response.data.meta.code === 201) {
            return response.data;
        } else {
            // Jika status code bukan 201, kembalikan error message dari API
            return {
                meta: {
                    status: 'error',
                    message: 'Gagal menyimpan classroom.',
                },
                data: null,
            };
        }
    } catch (error) {
        // Menangani error API dan mengembalikan error dari API
        if (error.response) {
            return error.response.data;
        } else {
            // Jika terjadi masalah jaringan, beri pesan error default
            return {
                meta: {
                    status: 'error',
                    message: 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.',
                },
                data: null,
            };
        }
    }
};


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