
import { useState, useEffect } from 'react'
import { motion, Variants } from "framer-motion";
import { TypeCircle } from './type'

const Circle = ({type, color, size, stroke, variants}: TypeCircle) => {
    const viewBox = `0 0 ${size} ${size}`
    const radius = ( size - stroke ) / 2
    
    return (
        <div className='graph-circle'>
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
                    strokeLinecap="round"
                    stroke='#efefef'
                    strokeWidth={`${stroke}px`}
                />

                <motion.circle 
                    cx={ size / 2 }
                    cy={ size / 2 }
                    r={radius}
                    strokeLinecap="round"
                    stroke={color}
                    variants={variants}
                    transform={`rotate(-90, ${size / 2} ${size / 2})`}
                    strokeWidth={`${stroke}px`}
                />
                <text 
                    fill="black" 
                    fontSize="16px" 
                    x="50%" 
                    y="50%" 
                    dy="5px" 
                    textAnchor="middle"
                >
                    {type}
                </text>
            </motion.svg>
        </div>
    )
}

export default Circle