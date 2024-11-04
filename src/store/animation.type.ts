import { ReactNode } from "@tanstack/react-router"
import { Target, VariantLabels } from "framer-motion"

type initialOnlyAnimationStatus = {
    initial: {
        initialStatus: boolean | Target | VariantLabels
        animate: boolean | Target | VariantLabels
        durationTime: number
    }
}

export type initialAndExitAnimationStatus = {
    initial: {
        initialStatus: boolean | Target | VariantLabels
        animate: boolean | Target | VariantLabels
        durationTime: number
    }
    exit: {
        initialStatus: boolean | Target | VariantLabels
        animate: boolean | Target | VariantLabels
        durationTime: number
    }
}

export type animationStatus =
    | initialAndExitAnimationStatus
    | initialOnlyAnimationStatus

export type animationState = {
    startAnimation: boolean
    children: ReactNode
}
