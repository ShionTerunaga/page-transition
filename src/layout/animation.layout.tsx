import { ReactNode, useEffect, useState } from "react"
import { useAnimation } from "../store/animation.hooks"
import { usePathname } from "../hooks/pathname"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./style.css"

interface props {
    homeComponent: ReactNode
    children: ReactNode
}

const AnimationLayout = (props: props) => {
    const { signal, setSignal, status } = useAnimation()
    const [prev, setPrev] = useState<ReactNode>(props.homeComponent)
    const pathname = usePathname()

    useEffect(() => {
        const signalChildren = signal.children
        const propsChildren = props.children
        console.log(signal.children)
        setSignal({
            startAnimation: true,
            children: signalChildren
        })

        if (signal.children === props.children) console.log("同じだよ")

        setTimeout(() => {
            setSignal({
                startAnimation: false,
                children: propsChildren
            })
            setPrev(props.children)
        }, status.initial.durationTime * 1000)
    }, [pathname])

    return (
        <AnimatePresence>
            {signal.startAnimation ? (
                <div className={styles.container}>
                    <motion.div
                        initial={status.initial.initialStatus}
                        animate={status.initial.animate}
                        transition={{ duration: status.initial.durationTime }}
                        className={styles.component}
                    >
                        {signal.children}
                    </motion.div>
                    {"exit" in status && (
                        <motion.div
                            initial={status.exit.initialStatus}
                            animate={status.exit.animate}
                            transition={{
                                duration: status.exit.durationTime
                            }}
                            className={styles.component}
                        >
                            {prev}
                        </motion.div>
                    )}
                </div>
            ) : (
                props.children
            )}
        </AnimatePresence>
    )
}

export default AnimationLayout
