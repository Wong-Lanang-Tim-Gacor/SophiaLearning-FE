import axios from 'axios'
import api from './Api'
import { BASE_API } from '@/utils/Constant'

// Service POST Method
export const PostAuthenticate = async (data) => {
    const response = await axios.post(BASE_API+'/login', data)
    return response;
}

// Service GET Method

/** 

api.get/post menandakan endpoint memerlukan token
jadi endpoint apapun yang butuh token harus make api 
kalo tidak butuh token baru make axios kayak diatas
BASE_API digunakan jika tidak menggunakan module api
karena base api-nya sudah ada di module api.

 **/

export const GetProfile = async () => {
    const response = await api.get('/profile')
    return response.data
}
  