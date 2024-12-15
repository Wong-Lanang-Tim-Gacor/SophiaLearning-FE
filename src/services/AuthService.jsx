import axios from 'axios'
import api from './Api'
import { BASE_API } from '@/utils/Constant'

// Service POST Method
export const PostAuthenticate = async (data) => {
    try {
        // Mengirimkan request POST ke API
        const response = await axios.post(BASE_API + '/auth/login', data);

        // Jika berhasil dan statusnya 200, simpan token di sessionStorage
        if (response.status === 200) {
            sessionStorage.setItem('token', response.data.data.token);
        }

        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
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


// Service GET Method

/** 

api.get/post menandakan endpoint memerlukan token
jadi endpoint apapun yang butuh token harus make api 
kalo tidak butuh token baru make axios kayak diatas
BASE_API digunakan jika tidak menggunakan module api
karena base api-nya sudah ada di module api.

 **/

export const GetProfile = async () => {
    const response = await api.get('/user')
    return response.data
}

export const Logout = async () => {
    return await api.post('/auth/logout')
    .then(response => {
        return response.data
    })
}

export const CheckAuthUser = async () => {
    return await api.get('/user')
        .then(() => {
            return true
        }).catch(error => {
            console.error(error)
            return false
        });
}