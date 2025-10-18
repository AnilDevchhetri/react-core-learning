import React from 'react'

const TaskListNumber = ({ data }) => {
    return (
        <div className='flex  justify-between gap-5 screen mt-10'>
            <div className='py-5 px-10 w-[45%] rounded-xl bg-red-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='py-5 px-10 w-[45%] rounded-xl bg-blue-400'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='py-5 px-10 w-[45%] rounded-xl bg-green-600'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium'>Accept Task</h3>
            </div>
            <div className='py-5 px-10 w-[45%] rounded-xl bg-yellow-600'>
                <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium'>Faild Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber