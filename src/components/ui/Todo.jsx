import React from 'react'

const Todo = (props) => {
    const { data } = props
  return (
    <>
        <div className={`w-full p-2 ${data.classroom.bg_tw_class} text-white rounded-md`}>
            <p className='text-xs'>{data.title.slice(0, 8) + '...'}</p>
        </div>
    </>
  )
}

export default Todo