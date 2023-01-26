import SVGLayout from '@/components/layout/SVGLayout'
import Pie from './Pie'
import { motion } from 'framer-motion'
import { technicalList } from "../data"
import { onGrapthCircle } from '@/hooks/util'
import { useWindowResize } from "@/hooks/util"

const SVGContainer = () => {
    const { isDesktop } = useWindowResize()
    const { circle } = onGrapthCircle()
    const formatList = technicalList.map((tec) => (isDesktop ? { ...tec, size: 260, stroke: 20 } : tec))
    const list = circle(formatList)
    
    return (
        <SVGLayout>
            <motion.h2 
                className='tit'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true  }}
                transition={{
                    delay: 0.5,
                    duration: 1
                }}
            >
                Skills
            </motion.h2>
            <div className='technica-wrapper'>
                {list?.map((tec: any, index: number) => (
                    <Pie
                        key={index}
                        id={tec.id}
                        type={tec.type}
                        size={tec.size}
                        color={tec.color}
                        stroke={tec.stroke}
                        variants={tec.draw}
                    />
                ))}
            </div>
        </SVGLayout>
    )
}

export default SVGContainer