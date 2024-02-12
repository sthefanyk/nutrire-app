import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import GAP from "../design/gap";

interface Props {
    image: string
}

const DetailsImage = ({ image }: Props) => {
    const [currentImage, setCurrentImage] = useState();
    return (
        <View className="h-[40%] w-full">
            <Image 
                source={{
                    uri: image
                }}
                className="flex-1 w-full object-cover"
            />
            <View
                className="my-2 w-full flex-row justify-center items-center"
                style={GAP[12]}
            >
                <View
                    className={`
                h-2 w-2 ${
                    currentImage === 1 ? "bg-green_500" : "bg-green_300"
                } rounded-full`}
                ></View>
                <View
                    className={`
                h-2 w-2 ${
                    currentImage === 2 ? "bg-green_500" : "bg-green_300"
                } rounded-full`}
                ></View>
                <View
                    className={`
                h-2 w-2 ${
                    currentImage === 3 ? "bg-green_500" : "bg-green_300"
                } rounded-full`}
                ></View>
            </View>
        </View>
    );
};

export default DetailsImage;
