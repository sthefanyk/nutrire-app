import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDesign } from '../design/useDesign'
import Banner1 from '../assets/banners/Banner1';
import Banner2 from '../assets/banners/Banner2';
import Banner3 from '../assets/banners/Banner3';
import Banner4 from '../assets/banners/Banner4';
import GAP from '../design/gap';

const Banner = () => {

    const [currentBanner, setCurrentBanner] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentBanner((prevBanner) => (prevBanner === 3 ? 1 : prevBanner + 1));
        }, 5000);

        return () => clearInterval(intervalId); 

    }, []);

    const onPressBanner = () => {
        setCurrentBanner((prevBanner) => (prevBanner === 3 ? 1 : prevBanner + 1));
    };

    return (
        <View
            className={`
                w-full rounded-lg overflow-hidden justify-center items-center
            `}
        >
            <Pressable onPress={onPressBanner}>
                {currentBanner === 1 && <Banner1 />}
                {currentBanner === 2 && <Banner2 />}
                {currentBanner === 3 && <Banner3 />}
            </Pressable>

            <View
                className="my-2 w-full flex-row justify-center items-center"
                style={GAP[12]}
            >
                <View className={`
                    h-2 w-2 ${currentBanner === 1 ? "bg-green_500" : "bg-green_300"} rounded-full`}>
                </View>
                <View className={`
                    h-2 w-2 ${currentBanner === 2 ? "bg-green_500" : "bg-green_300"} rounded-full`}>
                </View>
                <View className={`
                    h-2 w-2 ${currentBanner === 3 ? "bg-green_500" : "bg-green_300"} rounded-full`}>
                </View>
            </View>
        </View>
    )
}

export default Banner


