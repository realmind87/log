import type { ReactElement } from 'react';
import { AppLayout } from '@/components/index';
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
    return <div>Main</div>
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>{page}</AppLayout>
    )
}

export default Page
