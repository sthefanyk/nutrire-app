import { View, Pressable, Text, Platform, SafeAreaView } from "react-native";
import React from "react";
import { useDesign } from "../design/useDesign";
import LogoHorizontal from "../assets/logos/LogoHorizontal";
import IBag from "../assets/icons/IBag";
import IBack from "../assets/icons/IBack";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";

export interface Props {
    props: BottomTabHeaderProps | NativeStackHeaderProps;
    back: boolean;
    bag: boolean;
    pathBack?: string
}

const Header = ({ back, bag, props, pathBack }: Props) => {
    const { screenTheme, screenThemeHex, textColorHex } : any = useDesign();


    const path = pathBack || "BagStack";
    if (Platform.OS === 'ios') {
        return (
            <SafeAreaView
                className={`w-full justify-center items-center ${screenTheme()}`}
                style={{backgroundColor: screenThemeHex()}}
            >
                <View className="flex-row w-full justify-between items-center p-1 h-[56px]">
                    {back ? (
                        <Pressable
                            className="h-12 w-12 justify-center items-center"
                            onPress={() => {
                                if (props.navigation.canGoBack()) {
                                    props.navigation.goBack();
                                }
                            }}
                        >
                            <IBack color={textColorHex()} />
                        </Pressable>
                    ) : (<View className="h-12 w-12 justify-center items-center"></View>)}
    
                    <View className="justify-center">
                        <LogoHorizontal color={textColorHex()} />
                    </View>
    
                    {bag ? (
                        <Pressable
                            className="h-12 w-12 justify-center items-center"
                            onPress={() => {
                                console.log(path)
                                props.navigation.navigate(path)
                            }}
                        >
                            <IBag color={textColorHex()} />
                        </Pressable>
                    ) : (<View className="h-12 w-12 justify-center items-center"></View>)}
                </View>
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaViewAndroid
                className={`w-full justify-center items-center ${screenTheme()}`}
                style={{backgroundColor: screenThemeHex()}}
            >
                <View className="flex-row w-full justify-between items-center p-1 h-[56px]">
                    {back ? (
                        <Pressable
                            className="h-12 w-12 justify-center items-center"
                            onPress={() => {
                                if (props.navigation.canGoBack()) {
                                    props.navigation.goBack();
                                }
                            }}
                        >
                            <IBack color={textColorHex()} />
                        </Pressable>
                    ) : (<View className="h-12 w-12 justify-center items-center"></View>)}
    
                    <View className="justify-center">
                        <LogoHorizontal color={textColorHex()} />
                    </View>
    
                    {bag ? (
                        <Pressable
                            className="h-12 w-12 justify-center items-center"
                            onPress={() => props.navigation.navigate("BagStack")}
                        >
                            <IBag color={textColorHex()} />
                        </Pressable>
                    ) : (<View className="h-12 w-12 justify-center items-center"></View>)}
                </View>
            </SafeAreaViewAndroid>
        );
    }
};

export default Header;
