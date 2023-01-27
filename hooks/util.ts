import { useScroll, Variants } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

export const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState(null)
    const [isDesktop, setIsDesktop] = useState(null)
    
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
        setIsDesktop(window.innerWidth >= 1024 ? true : false)
    }
    
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {
        isDesktop,
        windowSize
    }
}

// 스크롤
export const mainScrollVariants: Variants = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

// 그래프
export const onGrapthCircle = () => {

    // 원형 그래프
    const circle = (list: any) => (
        list?.map((tec: any, index: number) => {
            const hidden = { pathLength: 0, opacity: 0 }
            const delay: number = (index + 0.5) * 0.1;
            const pathLength: number = tec.percentage / 100
            const visible: Function = () => ({
                pathLength,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0},
                    opacity: { delay, duration: 0.01 }
                }
            })
            return { ...tec, id: index, draw: { hidden, visible} }
        })
    )
    
    return {
        circle
    }
}