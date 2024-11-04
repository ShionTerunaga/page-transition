import { useContext } from "react"
import {
    AnimationStateContext,
    AnimationStatusContext
} from "./animation.provider"

export const useAnimation = () => {
    const [signal, setSignal] = useContext(AnimationStateContext)
    const [status, setStatus] = useContext(AnimationStatusContext)

    return {
        signal,
        status,
        setSignal,
        setStatus
    }
}
