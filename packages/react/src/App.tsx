import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import { Button } from '@/components'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  )
}
