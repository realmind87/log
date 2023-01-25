import type { ReactElement } from 'react';
import { AppLayout } from '@/components/index';
import type { NextPageWithLayout } from './_app'
import SVGContainer from "@/components/svg/circle/SVGContainer"
import VisualLayout from '@/components/layout/VisualLayout'
import { motion, Variants } from "framer-motion";

const mainVariants: Variants = {
    offscreen: {
        y: 0
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Page: NextPageWithLayout = () => {
    return (
        <motion.div
            className='content'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div variants={mainVariants}>
                <VisualLayout />
                <SVGContainer />
            </motion.div>
        </motion.div>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <AppLayout>{page}</AppLayout>
    )
}

export default Page
