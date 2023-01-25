import CircleItem from './CircleItem'

const SVGContainer = () => {

    const technicalInfoList = [
        {
            id: 1,
            type: "javascript",
            color: "#ff0055",
            size: 250,
            stroke: 10,
            percentage: 10
        },
        {
            id: 2,
            type: "typescript",
            color: "#0099ff",
            size: 250,
            stroke: 10,
            percentage: 20
        },
        {
            id: 3,
            type: "ReactJS",
            color: "#00cc88",
            size: 250,
            stroke: 10,
            percentage: 30
        }
    ]
    
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 0.5,
                opacity: 1,
                transition: {
                    strokeDasharray: {
                        delay,
                        type: "spring", 
                        duration: 1.5, 
                        bounce: 0
                    },
                    pathLength:{ 
                        delay,
                        type: "spring", 
                        duration: 1.5, 
                        bounce: 0
                    },
                    opacity: { 
                        delay, 
                        duration: 0.01 
                    }
                }
            };
        }
    };
    
    return (
        <div className='svg-container'>
            {technicalInfoList.map((tec) => {
                return (
                    <CircleItem
                        key={tec.id}
                        type={tec.type}
                        custom={tec.id}
                        size={tec.size}
                        color={tec.color}
                        stroke={tec.stroke}
                        percentage={tec.percentage}
                        variants={draw}
                    />
                )
            })}
        </div>
    )
}

export default SVGContainer