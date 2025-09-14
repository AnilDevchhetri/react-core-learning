import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        setEmail("");
        setPassword("");

    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl' >
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex flex-col items-center justify-center'>
                    <input required className='text-white outline-none border-2 bg-transparent border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder='Enter your eamil' />
                    <input required type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='text-white outline-none border-2 bg-transparent border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3' placeholder='Enter Password' />
                    <button className='text-black outline-none   bg-emerald-600 rounded-full py-3 px-5 text-xl mt-3 ' >Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login