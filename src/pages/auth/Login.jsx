import { useState } from 'react';
import { PostAuthenticate } from '@/services/AuthService.jsx';
import Illustration from '@/assets/images/illustration-login.svg'
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const auth = await PostAuthenticate({
            email: email,
            password: password,
        })
        if (auth.meta.code === 200) {
            alert('Login Success')
        } else {
            alert('Login failed')
        }
    }
    return (
        <>
            <div className='h-[90vh] flex flex-col items-center justify-center'>
                <div className='max-w-[980px] w-[80%] grid grid-cols-1 sm:grid-cols-2 items-center'>
                    <div className='hidden sm:block'>
                        <img className='w-[80%] mx-auto block' src={Illustration} alt='Illustration' />
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold mb-12'>Masuk</h1>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>Email</label>
                                <input type='text' className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className='space-y-2'>
                                <label className='text-sm font-medium'>Password</label>
                                <input type='password' className='bg-white border border-gray-300 outline-none rounded-lg w-full px-4 py-2' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                            </div>
                            <Button type='primary' text='Masuk' />
                        </form>
                        <p className='text-sm text-gray-500 font-normal mt-8'>Tidak memiliki Akun? <Link to='/' className='text-green-600 font-semibold'>Daftar disini</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;