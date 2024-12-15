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


// const storeClassroom = async (data) => {
//     return await api.post('/classrooms', data)
//         .then((response) => {
//             if (response.data.meta.code === 201) return response.data
//         })
// }

const storeClassroom = async (data) => {
    try {
        const response = await api.post('/classrooms', data);

        // Jika berhasil dan statusnya sesuai, kembalikan respons data
        if (response.data.meta.code === 201) {
            return response.data;
        } else {
            // Jika ada masalah dengan status, kembalikan error dari API
            return {
                meta: {
                    status: 'error',
                    message: 'Gagal menambahkan classroom.',
                },
                data: null,
            };
        }
    } catch (error) {
        // Menangani error dari server atau jaringan
        if (error.response) {
            return error.response.data; // Kembalikan respons error dari API
        } else {
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
    return await api.put(`/classrooms/${id}`, {
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