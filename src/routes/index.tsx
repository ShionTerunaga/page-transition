import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { HomeComponent } from "../feature/home"

export const Route = createFileRoute("/")({
    component: HomeComponent
})
