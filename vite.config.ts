import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [TanStackRouterVite({}), react(), vanillaExtractPlugin()]
})
