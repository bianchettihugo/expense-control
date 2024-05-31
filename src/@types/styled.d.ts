import 'styled-components'
import { lightTheme } from '../styles/light-theme'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}