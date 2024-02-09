import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme"

const { theme, updateTheme } = useTheme();

const getBgTheme = () => {
    if (theme === Theme.Normal) {
      return "bg-brown_100"
    }

    if (theme === Theme.Light) {
      return "bg-light"
    }

    if (theme === Theme.Dark) {
      return "bg-dark"
    }
}