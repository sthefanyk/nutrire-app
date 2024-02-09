import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDesign } from '../design/useDesign'
import BannerGroup from '../assets/groups/BannerGroup';

const Banner = () => {

    const { font } = useDesign();
    return (
        <View
            className={`
                w-full
                p-4 bg-green_400 rounded-lg
                relative overflow-hidden
            `}
        >
            <View
                className={`
                    w-[80%] font-montserrat-regular text-brown_100 ${font('base')} mb-2
                `}
            >
                <Text
                    className={`
                        w-full font-montserrat-regular text-brown_100 ${font('base')} mb-1
                    `}
                    >Mais vendidos!</Text>
                <Text
                    className={`
                        w-full font-fresca text-brown_100 ${font('3xl')}
                    `}
                >Saborosos, frescos e irresistíveis</Text>  
            </View>
            <Pressable
                className={`
                    w-[30%] p-4 bg-green_500 rounded-full
                    items-center
                `}
            >
                <Text
                    className={`
                        font-montserrat-semibold text-brown_100 ${font('sm')}
                    `}
                >Reservar</Text>
            </Pressable>

            <BannerGroup 
                className={`absolute -right-24`}
            />
        </View>
    )
}

export default Banner


