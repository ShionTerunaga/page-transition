import { useEffect, useState } from "react"

export const usePathname = () => {
    const [pathname, setPathname] = useState<string>(window.location.pathname)

    useEffect(() => {
        const handleChangePathName = () => {
            console.log(window.location.pathname)
            setPathname(window.location.pathname)
        }

        window.addEventListener("popstate", handleChangePathName)

        const originalPushState = window.history.pushState
        const originalReplaceState = window.history.replaceState

        window.history.pushState = (...args) => {
            console.log(args)
            originalPushState.apply(window.history, args)
            handleChangePathName()
        }

        window.history.replaceState = (...args) => {
            originalReplaceState.apply(window.history, args)
            handleChangePathName()
        }

        return () => {
            window.removeEventListener("popstate", handleChangePathName)
            window.history.pushState = originalPushState
            window.history.replaceState = originalReplaceState
        }
    }, [window])

    return pathname
}
