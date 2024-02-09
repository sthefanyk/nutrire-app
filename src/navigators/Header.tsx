import { View, Pressable, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDesign } from "../design/useDesign";
import LogoHorizontal from "../assets/logos/LogoHorizontal";
import IBag from "../assets/icons/IBag";
import IBack from "../assets/icons/IBack";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export interface Props {
    props: BottomTabHeaderProps | NativeStackHeaderProps;
    back: boolean;
    bag: boolean;
}

const Header = ({ back, bag, props }: Props) => {
    const { screenTheme, textColorHex } = useDesign();
    return (
        <SafeAreaView
            className={`w-full justify-center items-center ${screenTheme('bg')}`}
        >
            <View className="flex-row w-full h-14 justify-between items-center">
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
        </SafeAreaView>
    );
};

export default Header;
