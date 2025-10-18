import React, { useEffect, useState } from 'react'


const Header = ({ data }) => {

    const [username, setUsername] = useState();
    useEffect(() => {
        if (!data) {
            setUsername('Admin')
        } else {
            setUsername(data.firstName)
        }
    }, [data])
    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '');
        window.location.reload();
    }
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{username}</span></h1>
            <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm' onClick={logOutUser}>Logout</button>
        </div >
    )
}

export default Header