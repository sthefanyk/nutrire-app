import { View, Text, Image } from "react-native";
import React from "react";
import GAP from "../design/gap";
import IAdd from "../assets/icons/IAdd";
import { useDesign } from "../design/useDesign";

interface Props {
    uri: string
}


const CardHome = () => {

    const { textColor, font } = useDesign();

    return (
        <View className="mr-2">
            <Image
                // source={require("../assets/images/cenoura.jpeg")}
                className="w-[152] h-[165] rounded-lg bg-black bg-brown_300_50"
            />

            <View className="flex-row justify-between w-[154]">
                <View>
                    <Text
                        className={`${
                            textColor() + " " + font("base")
                        } font-montserrat-semibold`}
                    >
                        Batata
                    </Text>
                    <Text className={`text-orange ${font("sm")}`}>
                        R$ 8.99 / Kg
                    </Text>
                </View>

                <View
                    className="flex-row px-2 py-1 bg-orange rounded-sm self-end items-center"
                    style={GAP[4]}
                >
                    <IAdd />
                    <Text
                        className={`text-brown_100 ${font(
                            "sm"
                        )} justify-center items-center font-montserrat-bold`}
                    >
                        1
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default CardHome;
