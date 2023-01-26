import type { ReactElement } from 'react';
import { AppLayout } from '@/components/index';
import type { NextPageWithLayout } from './_app'
import SVGContainer from "@/components/svg/circle/SVGContainer"
import VisualLayout from '@/components/layout/VisualLayout'
import { motion } from "framer-motion";
import { mainScrollVariants } from '@/hooks/util'

const Page: NextPageWithLayout = () => {
    return (
        <motion.div className='content'>
            <VisualLayout />
            <SVGContainer />
        </motion.div>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>{page}</AppLayout>
    )
}

export default Page
