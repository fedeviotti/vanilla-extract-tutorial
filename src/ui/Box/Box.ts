import { createBox } from "@dessert-box/react"
import { sprinkles } from "../../styles/sprinkles.css"
import { boxReset } from "./Box.css"

const Box = createBox({
  atoms: sprinkles,
  defaultClassName: boxReset,
})

export default Box
