
import { useState, useEffect } from 'react'
import { motion, Variants } from "framer-motion";
import { TypeCircle } from './type'

const CircleItem = ({type, custom, color, size, stroke, variants, percentage}: TypeCircle) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setProgress(percentage);
    }, [percentage]);
    
    const viewBox = `0 0 ${size} ${size}`
    const radius = ( size - stroke ) / 2
    const circumference = radius * Math.PI * 2
    const dash = ( progress * circumference ) / 100

    console.log([dash, circumference - dash])

    return (
        <div className='graph-circle' >
            <motion.svg
                width={size}
                height={size}
                viewBox={viewBox}
                initial="hidden"
                animate="visible"
            >
                <motion.circle 
                    cx={ size / 2 }
                    cy={ size / 2 }
                    r={radius}
                    strokeDasharray={`${dash}, ${circumference - dash}`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    stroke={color}
                    variants={variants}
                    transform={`rotate(-90, ${size / 2} ${size / 2})`}
                    strokeWidth={`${stroke}px`}
                    custom={custom}
                />
            </motion.svg>
        </div>
    )
}

export default CircleItem