import {useState} from "react";
import {PostAuthenticate} from "@/services/AuthService.jsx";

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
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="text" className={'p-2 border'} placeholder="Email" onChange={e => setEmail(e.target.value)} />

                <label htmlFor="">Password</label>
                <input type="password" className={'p-2 border'} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button type={'submit'}>Login</button>
            </form>
        </>
    );
}

export default Login;