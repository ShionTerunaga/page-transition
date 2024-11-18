import { ElementRef, forwardRef, ReactNode, useEffect } from "react"
import { useAnimation } from "../store/animation.hooks"
import { usePathname } from "../hooks/pathname"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./style.css"
import { FrozenLayout } from "../store/frozen-layout"
import { useRouter } from "@tanstack/react-router"

interface props {
    homeComponent: ReactNode
    children: ReactNode
}

const Child = forwardRef<ElementRef<"div">, props>((props, ref) => {
    const { status } = useAnimation()

    return (
        <motion.div
            ref={ref}
            className={styles.container}
            initial={status.initial}
            animate={status.animate}
            exit={status.exit}
            transition={{ duration: status.durationTime }}
        >
            <FrozenLayout>{props.children}</FrozenLayout>
        </motion.div>
    )
})

Child.displayName = "Child"

export const AnimationLayout = (props: props) => {
    const path = usePathname()

    return (
        <AnimatePresence mode="popLayout">
            <Child {...props} key={path} />
        </AnimatePresence>
    )
}
