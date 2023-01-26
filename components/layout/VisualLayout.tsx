import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useWindowResize } from "@/hooks/util"

const VisualLayout = () => {
    const { isDesktop } = useWindowResize()
    
    const columFirst = Array(10).fill(undefined).map((_, index) => {
        return <div key={index} className='box' />
    }, [])

    const columSecond = Array(10).fill(undefined).map((_, index) => {
        return <div key={index} className='box' />
    }, [])

    const columThird = Array(10).fill(undefined).map((_, index) => {
        return <div key={index} className='box' />
    }, [])

    const columFourth = Array(10).fill(undefined).map((_, index) => {
        return <div key={index} className='box' />
    }, [])

    const columFive = Array(10).fill(undefined).map((_, index) => {
        return <div key={index} className='box' />
    }, [])

    return (
        <div className="visual-wrap">
            <div className="info-wrap">
                <motion.div className="gird-wrap">

                    <motion.div 
                        className="colum"
                        initial={{ translateY: `-${(10 * 100)}px`}}
                        animate={{ translateY: '0' }}
                        transition= {{
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 50
                        }}
                    >
                        {columFirst}
                    </motion.div>
                    
                    <motion.div 
                        className="colum"
                        initial={{ translateY: '0' }}
                        animate={{ translateY: `-${(10 * 100)}px` }}
                        transition= {{
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 50
                        }}
                    >
                        {columSecond}
                    </motion.div>
                    
                    {isDesktop && (
                        <>
                            <motion.div
                                className="colum"
                                initial={{ translateY: `-${(10 * 100)}px`}}
                                animate={{ translateY: '0' }}
                                transition= {{
                                    ease: 'linear',
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 50
                                }}
                            >
                                {columThird}
                            </motion.div>

                            <motion.div 
                                className="colum"
                                initial={{ translateY: '0' }}
                                animate={{ translateY: `-${(10 * 100)}px` }}
                                transition= {{
                                    ease: 'linear',
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 50
                                }}
                            >
                                {columFourth}
                            </motion.div>
                            
                            <motion.div 
                                className="colum"
                                initial={{ translateY: `-${(10 * 100)}px`}}
                                animate={{ translateY: '0' }}
                                transition= {{
                                    ease: 'linear',
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 50
                                }}
                            >
                                {columFive}
                            </motion.div>    
                        </>
                    )}
                    

                </motion.div>
                <div className="top-gradient" />
                <div className="bottom-gradient" />
                <p className="txt">Front end<br /> Developer</p>
            </div>
        </div>
    )
}

export default VisualLayout