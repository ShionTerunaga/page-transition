import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react"
import { Property } from "csstype"
import { AnimationLayout } from "../layout/animation.layout"
import { animationStatus } from "./animation.type"

const initialStatus: animationStatus = {
    initial: { x: "100%", zIndex: 1 },
    animate: { x: 0, zIndex: 0 },
    exit: { x: "-25%", zIndex: 0 },
    durationTime: 0.333
}

export const AnimationStatusContext = createContext<
    [animationStatus, Dispatch<SetStateAction<animationStatus>>]
>([initialStatus, () => {}])

interface props {
    homeComponent: ReactNode
    children: ReactNode
    backgroundColor?: Property.BackgroundColor
}

export const AnimationProvider = (props: props) => {
    const [status, setStatus] = useState<animationStatus>(initialStatus)

    return (
        <AnimationStatusContext.Provider value={[status, setStatus]}>
            <AnimationLayout {...props} />
        </AnimationStatusContext.Provider>
    )
}
