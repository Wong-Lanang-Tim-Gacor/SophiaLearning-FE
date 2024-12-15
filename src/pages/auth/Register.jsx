import {useState} from 'react';
import Button from '@/components/ui/Button';
import {Link, useNavigate} from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';
import api from "@/services/Api.jsx";

function Register() {
    const navigate = useNavigate()
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value, // Update the corresponding field in profileData
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        return await api.post('auth/register',profileData)
            .then(res => {
                toast.success('Register berhasil silahkan login')
            }).catch(err => {
                toast.error('Register gagal, ulangi pendaftaran')
            })
    };


    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className='h-[90vh] flex flex-col items-center justify-center'>
                <div className='max-w-[980px] w-[80%] grid grid-cols-1 sm:grid-cols-2 items-center'>
                    {/*<div className='hidden sm:block'>*/}
                    {/*    <img className='w-[80%] mx-auto block' src={Illustration} alt='Illustration'/>*/}
                    {/*</div>*/}
                    <div>
                        <h1 className='text-3xl font-semibold mb-3'>Daftar</h1>
                        <p className={'mb-2'}>Silahkan daftar untuk melanjutkan!</p>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>Name</label>
                                <input type='text'
                                       className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2'
                                       placeholder='Nama'
                                       value={profileData.name}
                                       onChange={handleInputChange}
                                       name="name"
                                />
                            </div>
                            <div className="flex gap-2">
                                <div className='space-y-2'>
                                    <label className='text-sm font-medium'>Email</label>
                                    <input type='text'
                                           className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2'
                                           placeholder='Email'
                                           value={profileData.email}
                                           onChange={handleInputChange}
                                           name="email"
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <label className='text-sm font-medium'>Username</label>
                                    <input type='text'
                                           className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2'
                                           placeholder='Username'
                                           value={profileData.username}
                                           onChange={handleInputChange}
                                           name="username"
                                    />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>Nomor telepon</label>
                                <input type='text'
                                       className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2'
                                       placeholder='Nomor Telepon'
                                       value={profileData.phone}
                                       onChange={handleInputChange}
                                       name="phone"
                                />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>Password</label>
                                <input type='password'
                                       className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2'
                                       placeholder='Password'
                                       value={profileData.password}
                                       onChange={handleInputChange}
                                       name="password"
                                />
                            </div>
                            <Button type='primary' text='Register'/>
                        </form>
                        <p className='text-sm text-gray-500 font-normal mt-8'>Sudah memiliki Akun? <Link to='/login'
                                                                                                         className='text-blue-600 font-semibold'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;