import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, AnimatePresence, MotionValue, useMotionValueEvent, useMotionValue, useTransform } from 'framer-motion'
import { projectList } from "@/data.d"
import { useWindowResize } from '@/hooks/util'

const ProjectLayout = () => {
    return (
        <motion.div className='project'>
            <motion.div className='project__wrap'>
                <motion.div className='project-container'>
                    <ProjectContent />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const ProjectContent = () => {
    const ref = useRef(null)
    const [ formatLst, setFormatLst ] = useState(projectList)
    const [ currentLeft, setCurrentLeft ] = useState(360)
    const [ posLeft, setPosLeft ] = useState(0)
    const { windowSize } = useWindowResize()
    const { scrollX } = useScroll({ container: ref })
    const { scrollXProgress } = useScroll({ container: ref })
    

    const indecateLst = Array(projectList.length).fill(undefined).map((_, index) => {
        return index * windowSize?.width
    })

    const debounce = (func: Function, delay: number) => {
        let timer = null;
        return function (...args : any) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => func(...args), delay);
        }
    }

    useMotionValueEvent(scrollX, 'change', debounce((x: number) => {
        const _index = indecateLst.findIndex(left => x === left)
        setFormatLst(
            projectList.map((project) => {
                return project.id === _index ? { ...project, isActive: true } : { ...project, isActive: false }
            })
        )
        setPosLeft(0)
    }, 100))

    useEffect(() => {
        console.log(posLeft);
    }, [posLeft])

    return (
        <motion.ul className='project-content' ref={ref} onScroll={() => {console.log('scroll')}}>
            {formatLst.map((project, index) => (
                <List
                    key={index}
                    name={project.name}
                    date={project.date}
                    isActive={project.isActive}
                    x={posLeft}
                />
            ))}
        </motion.ul>
    )
}

const List = ({ name, date, x, isActive }) => {
    return (
        <motion.li className='project-list'>
            <div className='box'>
                <motion.div> 
                    <h2 className='project-info__tit'>{name}</h2>
                    <span className='project-info__date'>{date}</span>
                </motion.div>
                <motion.div className='project-list__thumnail'>
                </motion.div>
            </div>
        </motion.li>
    )
}

export default ProjectLayout