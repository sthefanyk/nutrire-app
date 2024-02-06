import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../design/color";
import { LoginType } from "../../types/LoginType";
import { useAuth } from "../../context/auth";
import JaoWaving from "../../assets/svgs/mascot/small/JaoWaving";

import { KeyboardAvoidingView, Platform } from "react-native";
import GAP from "../../design/gap";
import IGoogle from "../../assets/icons/IGoogle";
import IViewPasswordOff from "../../assets/icons/IViewPasswordOff";
import HorizontalGroup from "../../assets/groups/HorizontalGroup";
import { StatusBar } from "expo-status-bar";
import IViewPasswordOn from "../../assets/icons/IViewPasswordOn";

const LoginScreen = ({ navigation }: any) => {
  const [form, setForm] = useState<LoginType>({} as LoginType);
  const [viewPassword, setViewPassword] = useState(true);

  const { login, loading } = useAuth();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled={false}
        // keyboardVerticalOffset={0}
        className="flex-1 h-[50%] w-full bg-brown_100 px-4 items-center"
        style={GAP[16]}
      >
        <StatusBar backgroundColor="transparent" />
        <View className="w-full py-4" style={GAP[4]}>
          <Text
            className={`
				font-fresca text-brown_200 w-full place-items-start
				${Platform.OS === "ios" ? "text-3xl" : "text-4xl"}
			`}
          >
            Bem-vindo de volta!
          </Text>
          <Text
            className={`
				font-montserrat-medium text-brown_200 w-full place-items-start
				${Platform.OS === "ios" ? "text-sm" : "text-base"}
			`}
          >
            Entre na sua conta
          </Text>
        </View>

        <View className="w-full items-center" style={GAP[8]}>
          <Text
            className={`
				font-montserrat-semibold text-brown_200 w-full m-2
				${Platform.OS === "ios" ? "text-sm" : "text-base"}
			`}
          >
            Email
          </Text>
          <TextInput
            className={`
              bg-[#FFF] w-full h-14 px-5 py-4 text-brown_200 rounded-lg font-montserrat-semibold
              ${Platform.OS === "ios" ? "text-sm" : "text-base"}	
            `}
            placeholder="Digite seu email"
            value={form.email}
            autoCapitalize="none"
            onChangeText={(value: string) => {
              setForm((prev) => {
                return { ...prev, email: value };
              });
            }}
          />
        </View>

        <View className="w-full items-center" style={GAP[8]}>
          <Text
            className={`
              font-montserrat-semibold text-brown_200 w-full m-2
              ${Platform.OS === "ios" ? "text-sm" : "text-base"}	
            `}
          >
            Senha
          </Text>

          <View
            className="flex-row justify-center items-center bg-[#FFF] w-full h-14 pl-5 py-4 rounded-lg"
            style={GAP[8]}
          >
            <TextInput
              className={`
					flex-1 text-brown_200 font-montserrat-semibold placeholder:font-montserrat-semibold
					${Platform.OS === "ios" ? "text-sm" : "text-base"}
			`}
              placeholder="Digite sua senha"
              value={form.password}
              autoCapitalize="none"
              secureTextEntry={viewPassword}
              onChangeText={(value: string) => {
                setForm((prev) => {
                  return { ...prev, password: value };
                });
              }}
            />
			{
				viewPassword ? 
        <Pressable onPress={() => setViewPassword(state => !state)}>
          <IViewPasswordOff />
        </Pressable>
				: 
        <Pressable onPress={() => setViewPassword(state => !state)}>
          <IViewPasswordOn />
        </Pressable>
			}
            
          </View>
        </View>

        <Pressable onPress={() => {}} className="w-full items-center">
          <Text
            className={`
				font-montserrat-semibold text-green_400 w-full
				${Platform.OS === "ios" ? "text-sm" : "text-base"}
				`}
          >
            Esqueci minha senha
          </Text>
        </Pressable>

        {loading ? (
          <ActivityIndicator size="large" color={COLORS.green_400} />
        ) : (
          <Pressable
            onPress={() => login(form.email || "", form.password || "")}
            className={`bg-green_400 py-4 w-full items-center rounded-xl`}
          >
            <Text className={`
              font-montserrat-semibold text-brown_100 
              ${Platform.OS === "ios" ? "text-base" : "text-xl"}
            `}>
              Entrar
            </Text>
          </Pressable>
        )}

        <View className="flex-row w-full justify-center">
          <Text
            className={`
				font-montserrat-medium text-brown_200 h-5
				${Platform.OS === "ios" ? "text-sm" : "text-base"}
				`}
          >
            Não tem conta? {`\n`}
          </Text>
          <Pressable
            onPress={() => {
				navigation.navigate('Register')
			}}
            className=" justify-center items-center h-5"
          >
            <Text
              className={`
					font-montserrat-semibold text-green_400
					${Platform.OS === "ios" ? "text-sm" : "text-base"}
				`}
            >
              Cadastrar-se
            </Text>
          </Pressable>
        </View>

        <View
          className="flex-row w-full justify-center items-center opacity-40"
          style={GAP[8]}
        >
          <View className="flex-1 h-[1px] bg-brown_300"></View>
          <Text className="font-montserrat-regular text-16">Ou com</Text>
          <View className="flex-1 h-[1px] bg-brown_300"></View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={COLORS.green_400} />
        ) : (
          <Pressable
            onPress={() => login(form.email || "", form.password || "")}
            className="py-4 w-full items-center rounded-xl flex-row justify-center bg-[#FFF] mb-6"
            style={GAP[8]}
          >
            <IGoogle />
            <Text className={`
              font-montserrat-semibold text-brown_200
              ${Platform.OS === "ios" ? "text-base" : "text-xl"}
            `}>
              Entrar com o Google
            </Text>
          </Pressable>
        )}

        <JaoWaving className="absolute -rotate-[38deg] -right-[8%] -top-4" />

        {
          Platform.OS === "ios" ? (
            <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              enabled={false}
              className="flex-1 justify-end">
              <HorizontalGroup />
            </KeyboardAvoidingView>
          ) 
          : (
            <HorizontalGroup />
          )
        }
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
