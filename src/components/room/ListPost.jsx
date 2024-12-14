import { DateFormat } from '@/utils/FormattingString'
import React from 'react'

const ListPost = (props) => {
  const {post, colorBg, typePost = 'material'} = props
  
  return (
    <>
        <div {...props} className='border border-gray-300 p-4 rounded-lg cursor-pointer hover:shadow-md'>
            <div className="flex items-center gap-x-4">
                <div>
                    <div className={`${colorBg} w-[50px] h-[50px] rounded-full grid place-content-center`}>
                        {
                            typePost === 'assignment' ? (
                                <i className={'fas fa-tasks text-white'}></i>
                            ) : typePost === 'material' ? (
                                <i className={'fa fa-book text-white'}></i>
                            ) : typePost === 'announcement' ? (
                                <i className={'fas fa-bell text-white'}></i>
                            ) : ''
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-md font-medium'>{post.title}</h3>
                    <p className='text-xs font-normal text-gray-500 mt-1'>{DateFormat(post.due_date)}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListPost