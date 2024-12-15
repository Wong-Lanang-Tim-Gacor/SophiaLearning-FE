import { useContext, useState } from 'react';
import { PostAuthenticate } from '@/services/AuthService.jsx';
import Illustration from '@/assets/images/illustration-login.svg'
import Button from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from "@/contexts/AuthContext.jsx";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { state, dispatch } = useContext(AuthContext)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await PostAuthenticate({
            email: email,
            password: password,
        });
    
        if (response.meta.status === 'success') {
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('user', JSON.stringify(response.data));
            dispatch({
                type: 'AUTH',
                payload: {
                    isLoading: true,
                    auth: true,
                    token: response.data.token,
                },
            });
            navigate('/');
        } else {
            toast.error(response.meta.message);
        }
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
                        <h1 className='text-3xl font-semibold mb-3'>Masuk</h1>
                        <p className={'mb-7'}>Silahkan masukan email dan password untuk melanjutkan!</p>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>Email</label>
                                <input type='text'
                                    className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2'
                                    placeholder='Email' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>Password</label>
                                <input type='password'
                                    className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2'
                                    placeholder='Password' onChange={e => setPassword(e.target.value)} />
                            </div>
                            <Button type='primary' text='Masuk' />
                        </form>
                        <p className='text-sm text-gray-500 font-normal mt-8'>Tidak memiliki Akun? <Link to='/register' className='text-blue-600 font-semibold'>Daftar disini</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;