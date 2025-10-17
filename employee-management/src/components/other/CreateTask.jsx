import React from 'react'

const CreateTask = () => {
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded' >
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div >
                        <h3 className='text-sm text-gray-300 mb-0.5 '>Task Title</h3>
                        <input type="text" placeholder='Enter title' className='text-sm py-1 px-2 w-4/5 rounded outline bg-transparent border-[1px] border-gray-400 mb-4 ' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input type='date' className='text-sm py-1 px-2 w-4/5 rounded outline bg-transparent border-[1px] border-gray-400 mb-4' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input type='text' placeholder='Employee Name' className='text-sm py-1 px-2 w-4/5 rounded outline bg-transparent border-[1px] border-gray-400 mb-4' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input type='text' placeholder='desing, dev, etc' className='text-sm py-1 px-2 w-4/5 rounded outline bg-transparent border-[1px] border-gray-400 mb-4 ' />
                    </div>

                </div>

                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea placeholder='Task description' rows={10} cols={30} className='w-full h-44 text-sm py-2 px-4 rounded routline-none bg-transparent border-[1px] border-gray-400 mb-4 '></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create task</button>
                </div>


            </form>
        </div>
    )
}

export default CreateTask