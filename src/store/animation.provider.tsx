import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState
} from "react"
import { animationState, animationStatus } from "./animation.type"
import { HomeComponent } from "../feature/home"
import { Property } from "csstype"
import AnimationLayout from "../layout/animation.layout"

const initialStatus: animationStatus = {
    initial: {
        initialStatus: { x: "100%", zIndex: 1 },
        animate: { x: 0, zIndex: 1 },
        durationTime: 0.333
    },
    exit: {
        initialStatus: { x: 0, zIndex: 0 },
        animate: { x: "-25%", zIndex: 0 },
        durationTime: 0.333
    }
}

const initialState: animationState = {
    startAnimation: false,
    children: <HomeComponent />
}

export const AnimationStatusContext = createContext<
    [animationStatus, Dispatch<SetStateAction<animationStatus>>]
>([initialStatus, () => {}])

export const AnimationStateContext = createContext<
    [animationState, Dispatch<SetStateAction<animationState>>]
>([initialState, () => {}])

interface props {
    homeComponent: ReactNode
    children: ReactNode
    backgroundColor?: Property.BackgroundColor
}

export const AnimationProvider = (props: props) => {
    const [state, setState] = useState<animationState>(initialState)
    const [status, setStatus] = useState<animationStatus>(initialStatus)

    return (
        <AnimationStateContext.Provider value={[state, setState]}>
            <AnimationStatusContext.Provider value={[status, setStatus]}>
                <AnimationLayout {...props} />
            </AnimationStatusContext.Provider>
        </AnimationStateContext.Provider>
    )
}
