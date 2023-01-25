import SVGLayout from '@/components/layout/SVGLayout'
import Pie from './Pie'
import { technicalList } from "../data"
import { onGrapthCircle } from '@/hooks/util'

const SVGContainer = () => {
    const { circle } = onGrapthCircle()
    const list = circle(technicalList)        
    
    return (
        <SVGLayout>
            <div className='technica-wrapper'>
                {list.map((tec: any, index: number) => (
                    <Pie
                        key={index}
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