import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-10'>
            <Header />
            <div >
                <form className='flex items-start justify-between'>
                    <div>
                        <h3>Task Title</h3>
                        <input type="text" placeholder='Enter ' />
                    </div>
                    <div>
                        <h3>Description</h3>
                        <textarea placeholder='Task description' rows={10} cols={30}></textarea>
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input type='date' />
                    </div>
                    <div>
                        <h3>Assign to</h3>
                        <input type='text' placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input type='text' placeholder='desing, dev, etc' />
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard