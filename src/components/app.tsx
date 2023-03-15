import * as React from "react"
import { clsx } from "clsx"
import { darkThemeClass } from "../styles/dark.css"
import { lightThemeClass } from "../styles/light.css"
import { Stats, StatsItem } from "./stats"
import { useColorScheme } from "../hooks/use-color-scheme"
import * as styles from "./app.css"
import "../styles/global.css"
import Box from "../ui/Box/Box"

const App: React.FC = () => {
  const scheme = useColorScheme()
  const schemeClass = scheme === `dark` ? darkThemeClass : lightThemeClass
  const [variant, setVariant] = React.useState<"default" | "invert">(`default`)

  return (
    <div className={clsx(schemeClass, styles.wrapper)}>
      <main className={styles.innerWrapper}>
        <Box display={`flex`} justifyContent={`space-between`} alignItems={`center`} marginBottom={`lg`}>
          <div className={styles.topBarHeading[scheme]}>Last 30 Days</div>
          <button
            type="button"
            className={styles.button}
            onClick={() => (variant === `default` ? setVariant(`invert`) : setVariant(`default`))}
          >
            Toggle Variant
          </button>
        </Box>
        <Stats variant={variant}>
          <StatsItem label="Total Subscribers" from={70.946} to={71.897} percentage={12} />
          <StatsItem label="Avg. Open Rate" from={56.14} to={58.16} percentage={2.02} />
          <StatsItem label="Avg. Click Rate" from={28.62} to={24.57} percentage={-4.05} />
        </Stats>
        <div className={styles.footer[scheme]}>
          Design by Tailwind UI. Built with vanilla-extract for educational purposes.
        </div>
      </main>
    </div>
  )
}

export default App
