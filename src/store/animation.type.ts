import { ReactNode } from "@tanstack/react-router"
import { HTMLMotionProps } from "framer-motion"

type framerMotionType = Pick<
    HTMLMotionProps<"div">,
    "initial" | "animate" | "exit"
>

type initialOnlyAnimationStatus = framerMotionType & {
    durationTime: number
}

export type animationStatus = initialOnlyAnimationStatus

export type animationState = {
    startAnimation: boolean
    children: ReactNode
}
