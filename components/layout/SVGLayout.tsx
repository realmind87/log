import { motion } from 'framer-motion'
import { mainScrollVariants } from '@/hooks/util'

const SVGLayout = ({ children }) => {   
    return (
        <motion.div className='svg-container'>
            {children}
        </motion.div>
    )
}

export default SVGLayout