import {
    matchContext,
    RouterContextProvider,
    useRouter
} from "@tanstack/react-router"
import { ReactNode, useContext, useRef } from "react"

interface props {
    children: ReactNode
}

export const FrozenLayout = (props: props) => {
    const router = useRouter()
    const context = useContext(matchContext)
    const frozen = useRef(context).current

    return <matchContext.Provider value={frozen} {...props} />
}
