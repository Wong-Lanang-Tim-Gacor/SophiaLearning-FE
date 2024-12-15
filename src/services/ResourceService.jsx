import api from "@/services/Api.jsx";

const getResource = async (id) => {
    return await api.get(`resources/class/${id}`)
        .then(res => res.data)
}
const showResource = async (id) => {
    return await api.get(`resources/data/${id}`)
        .then(res => res.data)
}
// const storeResource = async (data) => {
//     return await api.post(`/resources/data`, data, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     }).then(response => {
//         return response.data
//     })
// }

const storeResource = async (data) => {
    try {
        const response = await api.post('/resources/data', data);

        if (response.status === 201) {
            return response.data;
        } else {
            return {
                meta: {
                    status: 'error',
                    message: 'Gagal menambahkan resource.',
                },
                data: null,
            };
        }
    } catch (error) {
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



const updateResource = async (id, data) => {
    return await api.post(`/resources/data/${id}?_method=PUT`, data, {
        headers: {
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

const updateAnswer = async (id, data) => {
    return await api.put(`/resources/answer/${id}`, data).then(response => {
        return response.data
    })
}

const getCalendar = async () => {
    return await api.get(`/resources/assignments/calendar/user`).then(res => res.data)
}

export {
    getResource,
    showResource,
    storeChat,
    storeResource,
    updateResource,
    updateAnswer,
    getAnswerByResource,
    getCalendar,
}