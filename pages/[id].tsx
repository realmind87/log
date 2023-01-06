import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app'

const Sub: NextPageWithLayout = () => {
    return <div>Sub</div>
}

Sub.getLayout = function getLayout(page: ReactElement) {
    return (
        <div className='sub'>{page}</div>
    )
}

export default Sub