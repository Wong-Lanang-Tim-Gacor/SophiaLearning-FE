import { ASSETS_URL } from '@/utils/Constant'
import React from 'react'

const ListMember = (props) => {
  const { member, key } = props
  const image = ASSETS_URL + member.photo_profile

  return (
    <>
      <div className='flex items-center gap-x-2 py-2 px-4' key={key}>
        <img className='w-[50px] h-[50px] rounded-full' src={image} alt='profile' />
        <p className='text-sm font-normal'>{member.name}</p>
      </div>
    </>
  )
}

export default ListMember