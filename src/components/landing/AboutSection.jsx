import React from 'react'
import ExampleImage from '@/assets/images/homepage.png'

const AboutSection = () => {
    return (
        <>
            <div className='h-[200vh]'>
                <div className='flex flex-col h-full items-center justify-center'>
                    <h1 className='text-6xl font-bold text-center'>Apa Itu Sophia?</h1>
                    <p className='text-lg text-gray-500 w-3/5 text-center mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque accusantium modi odit voluptatem animi qui fugit nihil maxime minima numquam deserunt ipsa sit dicta omnis, fuga possimus cumque harum.</p>
                    <img className='w-[80%] mx-auto rounded-lg border border-gray-300 shadow-md mt-24' src={ExampleImage} alt="ss" />
                </div>
            </div>
        </>
    )
}

export default AboutSection