import React from 'react'

const Button = (props) => {
    const types = {
        primary: 'bg-black text-white',
        secondary: 'bg-transparent border border-slate-300',
        disable: 'bg-gray-100'
    }
    return (
        <>
            <button {...props} className={`${types[props.type]} py-2 px-4 rounded-md text-sm font-medium mt-2`}>{props.text}</button>
        </>
    )
}

export default Button