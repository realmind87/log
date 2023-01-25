

// 원형 그래프
export const onGrapthCircle = () => {

    const circle = (list: any) => (
        list.map((tec: any, index: number) => {
            const hidden = { pathLength: 0, opacity: 0 }
            const delay: number = (index + 1) * 0.5;
            const pathLength: number = tec.percentage / 100
            const visible: Function = () => ({
                pathLength,
                opacity: 1,
                transition: {
                    pathLength:{ delay, type: "spring", duration: 1.5, bounce: 0},
                    opacity: { delay, duration: 0.01 }
                }
            })
            return { ...tec, draw: { hidden, visible} }
        })
    )
    
    return {
        circle
    }
}