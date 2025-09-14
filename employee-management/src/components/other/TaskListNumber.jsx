import React from 'react'

const TaskListNumber = () => {
    return (
        <div className='flex  justify-between gap-5 screen mt-10'>
            <div className='py-5 px-10 w-[45%] rounded-xl bg-red-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='py-5 px-10 w-[45%] rounded-xl bg-blue-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='py-5 px-10 w-[45%] rounded-xl bg-green-600'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='py-5 px-10 w-[45%] rounded-xl bg-yellow-600'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber