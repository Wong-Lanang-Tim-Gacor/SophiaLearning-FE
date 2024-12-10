import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  const {navs} = props
  const activeStyle = 'text-green-600 text-sm font-bold'
  const nonActiveStyle = 'text-gray-400 text-sm font-normal'
  return (
    <>
        <div className='flex gap-x-12 pb-6'>
            { navs.map((nav, index) => (
                <Link
                    className={`${nav.path === '/class' ? activeStyle : nonActiveStyle}`} 
                    key={index} 
                    to={nav.path}>
                        {nav.name}
                </Link>
            )) }
        </div>
    </>
  )
}

export default Navigation