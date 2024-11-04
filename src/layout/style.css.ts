import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        position: "relative",
        width: "100vw",
        height: "100vh"
    }),
    component: style({
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0
    })
}

export default styles
