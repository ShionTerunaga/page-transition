import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { AboutComponent } from "../feature/about"

export const Route = createFileRoute("/about")({
    component: AboutComponent
})
