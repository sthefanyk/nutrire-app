import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../design/color";
import { RegisterType } from "../../types/RegisterType";
import { useAuth } from "../../context/auth";
import ShapeRegister from "../../assets/svgs/ShapeRegister";

const RegisterScreen = ({ navigation }: any) => {
  const [form, setForm] = useState<RegisterType>({} as RegisterType);

	const { login, loading, userData } = useAuth();


  return (
    <View className="flex-1 bg-brown_100 items-center p-4">
      <Text className="text-4xl font-fresca text-brown_200 w-[90%] text-center mb-10">
        Bem-vindo ao Nutrire!
      </Text>

      <View className="gap-2 w-[90%]">
        <Text className="text-2xl font-fresca text-brown_200">Nome</Text>
        <TextInput
          className="bg-[#FFF] w-max h-12 text-brown_200 px-2 text-xl rounded-lg font-montserrat-regular placeholder:font-montserrat-regular mb-4"
          placeholder="Seu nome"
          value={form.name}
          autoCapitalize="none"
          onChangeText={(value: string) => {
            setForm((prev) => {
              return { ...prev, name: value };
            });
          }}
        />
        <Text className="text-2xl font-fresca text-brown_200">E-mail</Text>
        <TextInput
          className="bg-[#FFF] w-max h-12 text-brown_200 px-2 text-xl rounded-lg font-montserrat-regular placeholder:font-montserrat-regular mb-4"
          placeholder="Seu e-mail"
          value={form.email}
          autoCapitalize="none"
          onChangeText={(value: string) => {
            setForm((prev) => {
              return { ...prev, email: value };
            });
          }}
        />
        <Text className="text-2xl font-fresca text-brown_200">Senha</Text>
        <TextInput
          className="bg-[#FFF] w-max h-12 text-brown_200 px-2 text-xl rounded-lg font-montserrat-regular placeholder:font-montserrat-regular mb-4"
          placeholder="Sua senha"
          value={form.password}
          autoCapitalize="none"
          onChangeText={(value: string) => {
            setForm((prev) => {
              return { ...prev, password: value };
            });
          }}
        />
        <Text className="text-2xl font-fresca text-brown_200">Confirme sua senha</Text>
        <TextInput
          className="bg-[#FFF] w-max h-12 text-brown_200 px-2 text-xl rounded-lg font-montserrat-regular placeholder:font-montserrat-regular"
          placeholder="Sua senha"
          value={form.passwordConfirm}
          autoCapitalize="none"
          onChangeText={(value: string) => {
            setForm((prev) => {
              return { ...prev, passwordConfirm: value };
            });
          }}
        />
        
      </View>

      <View className="w-[80%] gap-4 mt-14 items-center">
        <Pressable
          onPress={() => navigation.navigate("Register")}
          className="bg-green_400 py-4 w-full items-center rounded-lg border-b-4 border-r-4 border-brown_200"
        >
          <Text className="text-4xl font-fresca text-brown_100">Cadastrar</Text>
        </Pressable>
      </View>

      <ShapeRegister
        className="absolute -z-10 -right-[70%] -bottom-[10%]"
        color={COLORS.green_100}
      />

    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
