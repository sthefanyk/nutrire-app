import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feijao from "../../assets/svgs/Feijao";
import LogoHorizontal from "../../assets/svgs/LogoHorizontal";
import Forma1 from "../../assets/svgs/Forma1";
import { COLORS } from "../../design/color";

const EnterScreen = ({navigation}: any) => {
    return (
        <SafeAreaView className="flex-1 bg-brown_100 items-center p-4">
            <LogoHorizontal className="m-8" />
            <View className="flex-1 items-center gap-4 w-full">
                <Text className="font-fresca text-5xl text-brown_200 text-center p-4">
                    Bem-vindo ao Nutrire!
                </Text>
                <Text className="font-fresca text-3xl text-brown_200 text-center">
                    Alimentos orgânicos e sustentáveis próximos a você.
                </Text>
                <Feijao 
                    className="absolute right-6 bottom-0"
                />
            </View>

            <View className="w-[80%] gap-4">
                <Pressable
                    onPress={() => navigation.navigate('Login')}
                    className="bg-green_400 py-4 w-full items-center rounded-lg border-b-4 border-r-4 border-brown_200"
                    >
                    <Text
                        className="text-4xl font-fresca text-brown_100"
                        >Entrar</Text>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('Register')}
                    className="bg-green_300 py-4 w-full items-center rounded-lg border-b-4 border-r-4 border-brown_200"
                    >
                    <Text
                        className="text-4xl font-fresca text-brown_200"
                        >Cadastrar-se</Text>
                </Pressable>
            </View>

            <Forma1 
                className="absolute -z-10 -right-0 -bottom-0"
                color={COLORS.green_100}
            />

        </SafeAreaView>
    );
};

export default EnterScreen;