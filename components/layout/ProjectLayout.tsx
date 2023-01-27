import { motion } from 'framer-motion'

const ProjectLayout = () => {
    return (
        <motion.div className='project'>
            
            <motion.div className='project__wrap'>
                <motion.div className='project-container'>

                    <motion.ul className='project-content'>
                        <motion.li 
                            className='project-list'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                opacity: {
                                    duration: 1
                                }
                            }}
                        >
                            <div className='box'>
                                <div className='project-info'>
                                    <h2 className='project-info__tit'>한화테크<br className='pc-hidden' /> Total Portal<br />웹 관리 시스템</h2>
                                    <span className='project-info__date'>2022.06 ~ 2022.12</span>
                                </div>
                                <motion.div className='project-list__thumnail'>
                                </motion.div>
                            </div>
                        </motion.li>

                        <motion.li 
                            className='project-list'
                            className='project-list'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                opacity: {
                                    duration: 1
                                }
                            }}
                        >
                            <div className='box'>
                                <div className='project-info'>
                                    <h2 className='project-info__tit'>한화테크<br className='pc-hidden' /> Total Portal<br />웹 관리 시스템</h2>
                                    <span className='project-info__date'>2022.06 ~ 2022.12</span>
                                </div>
                                <motion.div className='project-list__thumnail'>
                                </motion.div>
                            </div>
                        </motion.li>
                    </motion.ul>

                </motion.div>
                
                
            </motion.div>
        </motion.div>
    )
}

export default ProjectLayout