import { Platform } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import { COLORS } from "./Colors";
import { Header } from "../enums/Header";

export interface DesignType {
    font: (font: string) => string;
    textColor: () => string;
    screenTheme: () => string;
    placeholderTextColor: () => string;
    logoColor: () => string;
    bgColorInverse: (props: string) => string;
    screenThemeHex: () => string;
    textColorHex: () => string;
    inputTheme: () => string;
    inputThemeHex: () => string;
    headerColor: () => { bg: string, veg: string };
    textMsgColor: (isOwner: boolean) => string
}

export const useDesign = (): DesignType => {
    const { theme, header } = useTheme();

    const font = (font: string): string => {
        // switch (font) {
        //     case "sm":
        //         return Platform.OS === "ios" ? "text-sm" : "text-sm";
        //     case "base":
        //         return Platform.OS === "ios" ? "text-base" : "text-base";
        //     case "lg":
        //         return Platform.OS === "ios" ? "text-lg" : "text-lg";
        //     case "xl":
        //         return Platform.OS === "ios" ? "text-xl" : "text-xl";
        //     case "2xl":
        //         return Platform.OS === "ios" ? "text-2xl" : "text-2xl";
        //     case "3xl":
        //         return Platform.OS === "ios" ? "text-3xl" : "text-3xl";
        //     case "4xl":
        //         return Platform.OS === "ios" ? "text-4xl" : "text-4xl";
        //     case "5xl":
        //         return Platform.OS === "ios" ? "text-5xl" : "text-5xl";
        //     case "6xl":
        //         return Platform.OS === "ios" ? "text-6xl" : "text-6xl";
        //     default:
        //         return "text-base";
        // }
        switch (font) {
            case "sm":
                return Platform.OS === "ios" ? "text-xs" : "text-sm";
            case "base":
                return Platform.OS === "ios" ? "text-sm" : "text-base";
            case "lg":
                return Platform.OS === "ios" ? "text-base" : "text-lg";
            case "xl":
                return Platform.OS === "ios" ? "text-lg" : "text-xl";
            case "2xl":
                return Platform.OS === "ios" ? "text-xl" : "text-2xl";
            case "3xl":
                return Platform.OS === "ios" ? "text-2xl" : "text-3xl";
            case "4xl":
                return Platform.OS === "ios" ? "text-3xl" : "text-4xl";
            case "5xl":
                return Platform.OS === "ios" ? "text-4xl" : "text-5xl";
            case "6xl":
                return Platform.OS === "ios" ? "text-5xl" : "text-6xl";
            default:
                return "text-base";
        }
    };

    const textColor = ():
        | "text-brown_200"
        | "text-brown_300"
        | "text-brown_100" => {
        if (theme === Theme.Normal) return "text-brown_200";

        if (theme === Theme.Light) return "text-brown_300";

        if (theme === Theme.Dark) return "text-brown_100";

        return "text-brown_200";
    };

    const textColorHex = () => {
        if (theme === Theme.Normal) return COLORS.brown_200;
        if (theme === Theme.Light) return COLORS.brown_300;
        if (theme === Theme.Dark) return COLORS.brown_100;

        return COLORS.brown_200;
    };

    const bgColorInverse = (props: string) => {
        if (theme === Theme.Normal) return props + "-brown_200";

        if (theme === Theme.Light) return props + "-brown_300";

        if (theme === Theme.Dark) return props + "-normal";

        return props + "-brown_200";
    };

    const screenTheme = () => {
        if (theme === Theme.Normal) return "bg-normal";

        if (theme === Theme.Light) return "bg-light";

        if (theme === Theme.Dark) return "bg-dark";

        return "bg-normal";
    };

    const borderScreenTheme = (): "border-brown_100" | "border-light" | "border-dark" => {
        if (theme === Theme.Normal) return "border-brown_100";

        if (theme === Theme.Light) return "border-light";

        if (theme === Theme.Dark) return "border-dark";

        return "border-brown_100";
    };

    const screenThemeHex = () => {
        if (theme === Theme.Normal) return COLORS.brown_100;
        if (theme === Theme.Light) return COLORS.light;
        if (theme === Theme.Dark) return COLORS.dark;

        return COLORS.brown_100
    }

    const placeholderTextColor = () => {
        if (theme === Theme.Normal) return COLORS.brown_300;
        if (theme === Theme.Light) return COLORS.brown_300;
        if (theme === Theme.Dark) return COLORS.brown_100;

        return COLORS.brown_300;
    };

    const logoColor = () => {
        if (theme === Theme.Normal) return COLORS.brown_300;
        if (theme === Theme.Light) return COLORS.brown_300;
        if (theme === Theme.Dark) return COLORS.brown_100;

        return COLORS.brown_300;
    };

    const headerColor = (): { bg: string, veg: string } => {
        if (header === Header.LightGreen) 
            return { bg: COLORS.green_300, veg: COLORS.green_500};

        if (header === Header.DarkGreen)
            return { bg: COLORS.green_500, veg: COLORS.green_300};

        if (header === Header.LightPurple) 
            return { bg: COLORS.purple, veg: COLORS.brown_300};

        if (header === Header.DarkPurple) 
            return { bg: COLORS.brown_300, veg: COLORS.purple};

        if (header === Header.LightBrown) 
            return { bg: COLORS.honey, veg: COLORS.brown_200};

        if (header === Header.DarkBrown) 
            return { bg: COLORS.brown_200, veg: COLORS.honey};

        return { bg: COLORS.green_500, veg: COLORS.green_300};
    };

    const textMsgColor = (isOwner: boolean): string => {
        switch (header) {
            case Header.LightGreen:
                if (!isOwner) return COLORS.brown_200
                break;
            case Header.DarkGreen:
                if (isOwner) return COLORS.brown_200
                break;
            default:
                break;
        }

        return COLORS.brown_100
    };

    const inputTheme = () => {
        if (theme === Theme.Normal) return "bg-light";

        if (theme === Theme.Light) return "bg-green_100_50";

        if (theme === Theme.Dark) return "bg-dark_search";

        return "bg-light";
    };

    const inputThemeHex = () => {
        if (theme === Theme.Normal) return COLORS.light;

        if (theme === Theme.Light) return COLORS.green_100_50;

        if (theme === Theme.Dark) return COLORS.dark_search;

        return COLORS.light;
    };

    return {
        font,
        textColor,
        screenTheme,
        placeholderTextColor,
        logoColor,
        bgColorInverse,
        screenThemeHex,
        textColorHex,
        inputTheme,
        inputThemeHex,
        headerColor,
        textMsgColor
    };
};
