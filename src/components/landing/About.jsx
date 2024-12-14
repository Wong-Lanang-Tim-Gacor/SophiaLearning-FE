import React, {useMemo, useRef, useState} from 'react'
import { useScroll, motion, useTransform } from 'framer-motion';
import ExampleImage from '../../assets/images/homepage.png'

const About = () => {
    const [widthScreen, setWidth] = useState(window.innerWidth)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    useMemo(() => {
        setWidth(window.innerWidth)
    }, []) 
        
    const scale = useTransform(scrollYProgress, [0.3, 0.8], [1, widthScreen > 680 ? 0.8 : 0.9])

    return (
        <>
            <div ref={ref} className='h-[150vh] sm:h-[250vh] relative'>
                <div className='flex flex-col h-full items-center justify-center'>
                    <h1 className='text-5xl sm:text-6xl font-bold text-center'>Apa Itu Sophia?</h1>
                    <p className='text-sm sm:text-lg text-gray-500 w-3/4 sm:w-3/6 text-center mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio neque accusantium modi odit voluptatem animi qui fugit nihil maxime minima numquam deserunt ipsa sit dicta omnis, fuga possimus cumque harum.</p>
                    <motion.img style={{scale}} className='sticky top-[10%] origin-center w-full mx-auto rounded-lg border border-gray-300 shadow-md mt-24' src={ExampleImage} alt="ss" />
                </div>
            </div>
        </>
    )
}

export default About