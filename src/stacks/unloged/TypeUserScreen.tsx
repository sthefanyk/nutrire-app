import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import JaoWaving from "../../assets/svgs/mascot/medium/JaoWaving";
import { COLORS } from "../../design/color";
import Shape5 from "../../assets/svgs/shapes/Shape5";
import Veg from "../../assets/svgs/Veg";

const TypeUserScreen = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-brown_100 items-center p-4">
      <Text className="text-4xl font-fresca text-brown_200 w-[90%] text-center mb-10">
        Bem-vindo ao Nutrire!
      </Text>

      <Text className="font-montserrat-regular text-3xl text-brown_200 text-center">
        Para começar, nos diga,{`\n`} você é cliente ou vendedor?
      </Text>

      <View className="w-[80%] gap-4 mt-14 items-center">
        <Pressable
          onPress={() => navigation.navigate("Register")}
          className="bg-green_400 py-4 w-full items-center rounded-lg border-b-4 border-r-4 border-brown_200"
        >
          <Text className="text-4xl font-fresca text-brown_100">Cliente</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          className="bg-green_400 py-4 w-full items-center rounded-lg border-b-4 border-r-4 border-brown_200"
        >
          <Text className="text-4xl font-fresca text-brown_100">Vendedor</Text>
        </Pressable>
      </View>

      {/* <Feijao 
				className='absolute -rotate-[38deg] -right-[12%] -top-4 scale-[0.8]'
			/> */}

      {/* <JaoWaving className='absolute -rotate-[38deg] -right-[10%] -top-4'/> */}

      {/* <Forma1 
                className="absolute -z-10 -right-0 bottom-0"
                color={COLORS.green_500}
            /> */}

      <Shape5
        className="absolute -z-10 -right-[18%] -bottom-[12%] rotate-[43deg] scale-[1.7]"
        color={COLORS.green_200}
      />

      <Veg className="absolute -z-10 -right-0 bottom-0" />
    </View>
  );
};

export default TypeUserScreen;

const styles = StyleSheet.create({});
