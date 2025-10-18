import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full  mt-10 py-5'>

            <AcceptTask />
            <NewTask />
            <AcceptTask />
            <FailedTask />



        </div>
    )
}

export default TaskList