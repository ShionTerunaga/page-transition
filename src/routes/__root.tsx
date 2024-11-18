import * as React from "react"
import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { usePathname } from "../hooks/pathname"
import { HomeComponent } from "../feature/home"
import { AnimationProvider } from "../store/animation.provider"

export const Route = createRootRoute({
    component: RootComponent
})

function RootComponent() {
    const pathname = usePathname()

    console.log(pathname)
    return (
        <>
            <div className="p-2 flex gap-2 text-lg">
                <Link
                    to="/"
                    activeProps={{
                        className: "font-bold"
                    }}
                    activeOptions={{ exact: true }}
                >
                    Home
                </Link>{" "}
                <Link
                    to="/about"
                    activeProps={{
                        className: "font-bold"
                    }}
                >
                    About
                </Link>
            </div>
            <hr />
            <AnimationProvider homeComponent={<HomeComponent />}>
                <Outlet />
            </AnimationProvider>

            <TanStackRouterDevtools position="bottom-right" />
        </>
    )
}
