import { motion } from "framer-motion";
import { TypeCircle } from './type'

const Circle = ({id, type, color, size, stroke, variants}: TypeCircle) => {
    const viewBox = `0 0 ${size} ${size}`
    const radius = ( size - stroke ) / 2
    
    return (
        <motion.div 
            className='graph-circle'
            initial={{ translateY: 30, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
                delay: (id + 0.1) * 0.2,
                duration: 0.5
            }}
            viewport={{ once: true }}
        >
            <motion.svg
                width={size}
                height={size}
                viewBox={viewBox}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.circle
                    cx={ size / 2 }
                    cy={ size / 2 }
                    r={radius}
                    strokeLinecap="round"
                    stroke="#efefef"
                    strokeWidth={`${stroke - 5}px`}
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
                
                <motion.text 
                    fill="#000" 
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: (id + 0.5) * 0.1,
                        duration: 1
                    }}
                >
                    {type}
                </motion.text>
            </motion.svg>
        </motion.div>
    )
}

export default Circle