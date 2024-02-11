import { useState, useEffect, useRef } from "react";
import { View, FlatList, Dimensions } from "react-native";
import Banner1 from "../assets/banners/Banner1";
import Banner3 from "../assets/banners/Banner3";
import Banner2 from "../assets/banners/Banner2";
import GAP from "../design/gap";

const DATA = [
    { banner: <Banner1 /> },
    { banner: <Banner2 /> },
    { banner: <Banner3 /> },
];

export const Carousel = () => {
    const [activeBanner, setActiveBanner] = useState<number>(0);
    const [data, setData] = useState(DATA);
    const FlatlistRef = useRef<FlatList>(null);

    const onViewableItemsChanged = ({ viewableItems }: any) => {
        if (viewableItems[0] !== undefined) {
            setActiveBanner(viewableItems[0]?.index);
            
        }
    };

    const viewabilityConfigCallbackPairs = useRef([
        {
            viewabilityConfig: {
                itemVisiblePercentThreshold: 80,
            },
            onViewableItemsChanged,
        },
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newIndex = (activeBanner + 1) % data.length;
            setActiveBanner(newIndex);
            FlatlistRef.current?.scrollToIndex({ index: newIndex, animated: !!newIndex });
        }, 5000);
        
        return () => clearInterval(intervalId);

    }, [activeBanner, data]);

    const maxDataLength = 30;

    const addMoreData = () => {
        const newData = [...data, ...DATA];
        if (newData.length > maxDataLength) {
            newData.splice(0, newData.length - maxDataLength);
        }
        setData(newData);
    };

    return (
        <View className="w-full justify-center items-center rounded-md overflow-hidden">
            <View className="w-full justify-center">
                <FlatList
                    ref={FlatlistRef}
                    data={data}
                    renderItem={({ item, index }) => (
                        <View style={{width: Dimensions.get('screen').width - 32}}>
                            {item.banner}
                        </View>
                    )}
                    pagingEnabled={true}
                    viewabilityConfigCallbackPairs={
                        viewabilityConfigCallbackPairs.current
                    }
                    horizontal={true}
                    keyExtractor={(item, index) => String(index)}
                    showsHorizontalScrollIndicator={false}
                    onEndReachedThreshold={0.5}
                    onEndReached={addMoreData}

                />
            </View>

            <View
                className="my-2 w-full flex-row justify-center items-center"
                style={GAP[12]}
            >
                {
                    DATA.map((_, index) => (
                        <View 
                        key={index}
                        className={`
                            ${activeBanner % DATA.length === index ? "w-4" : "w-2"}
                            h-2 ${activeBanner % DATA.length === index ? "bg-green_500" : "bg-green_300"} rounded-full`}>
                        </View>
                    ))
                }
            </View>
        </View>
    );
};


            
