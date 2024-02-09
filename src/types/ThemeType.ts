import { Theme } from "../enums/Theme"

export interface ThemeType {
    theme: Theme
    updateTheme: (theme:Theme) => Promise<void>
}