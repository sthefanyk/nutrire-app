import { Header } from "../enums/Header"
import { Theme } from "../enums/Theme"

export interface ThemeType {
    theme: Theme
    header: Header
    updateTheme: (theme:Theme) => Promise<void>
    updateHeader: (header:Header) => Promise<void>
}