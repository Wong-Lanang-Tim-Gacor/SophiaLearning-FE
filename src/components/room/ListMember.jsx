import React from 'react'

const ListMember = (props) => {
  const {member} = props
  const image = 'https://avatarfiles.alphacoders.com/374/thumb-1920-374880.png'
  
  return (
    <>
        <div className='flex items-center gap-x-2 py-2 px-4'>
            <img className='w-[50px] h-[50px] rounded-full' src={image} alt='profile'/>
            <p className='text-sm font-normal'>{member}</p>
        </div>
    </>
  )
}

export default ListMember