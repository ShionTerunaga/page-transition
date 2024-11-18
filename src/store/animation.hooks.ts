import { useContext } from "react"
import { AnimationStatusContext } from "./animation.provider"

export const useAnimation = () => {
    const [status, setStatus] = useContext(AnimationStatusContext)

    return {
        status,
        setStatus
    }
}
