import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDesign } from "../design/useDesign";
import IHomeTab from "../assets/icons/IHomeTab";
import ISearchTab from "../assets/icons/ISearchTab";
import IPerfilTab from "../assets/icons/IPerfilTab";
import IChatTab from "../assets/icons/IChatTab";
import { COLORS } from "../design/Colors";
import { Theme } from "../enums/Theme";
import { useTheme } from "../context/ThemeContext";
import HomeScreen from "../screens/HomeScreen";
import PerfilScreen from "../screens/PerfilScreen";
import BagStackScreen from "../stacks/BagStack";
import ChatStackScreen from "../stacks/ChatStack";
import Header from "./Header";
import SearchStack from "../stacks/SearchStack";
import PerfilStack from "../stacks/PerfilStack";
import DetailsScreen from "../screens/DetailsScreen";

const Tab = createBottomTabNavigator();

const Navigator = () => {
    const { screenThemeHex, textColorHex, textColor, font } = useDesign();
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: screenThemeHex(),     
                },
                header: props => <Header
                    props={props} 
                    back={false} 
                    bag={true}
                />
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className="justify-center items-center">
                            <IHomeTab
                                color={
                                    Theme.Dark === theme
                                        ? focused
                                            ? COLORS.green_300
                                            : textColorHex()
                                        : focused
                                        ? COLORS.green_400
                                        : textColorHex()
                                }
                            />
                            <Text className={`font-montserrat-regular text-xs ${Theme.Dark === theme
                                        ? focused
                                            ? "text-green_300"
                                            : textColor()
                                        : focused
                                        ? "text-green_400"
                                        : textColor()}`}>Principal</Text>
                        </View>
                    ),
                    
                    
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="BagStack"
                component={BagStackScreen}
                options={{
                    tabBarButton: () => null,   
                    header: props => <Header 
                        props={props} 
                        back={true} 
                        bag={false}
                    />
                }}
            />
            <Tab.Screen
                name="SearchStack"
                component={SearchStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View className="justify-center items-center">
                            <ISearchTab
                                color={
                                    Theme.Dark === theme
                                        ? focused
                                            ? COLORS.green_300
                                            : textColorHex()
                                        : focused
                                        ? COLORS.green_400
                                        : textColorHex()
                                }
                            />
                            <Text className={`font-montserrat-regular text-xs ${Theme.Dark === theme
                                        ? focused
                                            ? "text-green_300"
                                            : textColor()
                                        : focused
                                        ? "text-green_400"
                                        : textColor()}`}>Pesquisa</Text>
                        </View>
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="ChatStack"
                component={ChatStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View className="justify-center items-center">
                            <IChatTab
                                color={
                                    Theme.Dark === theme
                                        ? focused
                                            ? COLORS.green_300
                                            : textColorHex()
                                        : focused
                                        ? COLORS.green_400
                                        : textColorHex()
                                }
                            />
                            <Text className={`font-montserrat-regular text-xs ${Theme.Dark === theme
                                        ? focused
                                            ? "text-green_300"
                                            : textColor()
                                        : focused
                                        ? "text-green_400"
                                        : textColor()}`}>Chat</Text>
                        </View>
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="PerfilStack"
                component={PerfilStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View className="justify-center items-center">
                            <IPerfilTab
                                color={
                                    Theme.Dark === theme
                                        ? focused
                                            ? COLORS.green_300
                                            : textColorHex()
                                        : focused
                                        ? COLORS.green_400
                                        : textColorHex()
                                }
                            />
                            <Text className={`font-montserrat-regular text-xs ${Theme.Dark === theme
                                        ? focused
                                            ? "text-green_300"
                                            : textColor()
                                        : focused
                                        ? "text-green_400"
                                        : textColor()}`}>Perfil</Text>
                        </View>
                    ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
};

export default Navigator;
