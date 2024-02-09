import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../design/Colors";
import { LoginType } from "../types/LoginType";
import { useAuth } from "../context/auth";

import { KeyboardAvoidingView, Platform } from "react-native";
import GAP from "../design/gap";
import IGoogle from "../assets/icons/IGoogle";
import HorizontalGroup from "../assets/groups/HorizontalGroup";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPasswod";
import { useDesign } from "../design/useDesign";
import JaoLogin from "../assets/Jao/JaoLogin";
import JaoLoginDark from "../assets/Jao/JaoLoginDark";

const LoginScreen = ({ navigation }: any) => {
  const [form, setForm] = useState<LoginType>({} as LoginType);

  const { login, loading } = useAuth();
  const { theme, updateTheme } = useTheme();
  const { screenTheme, textColor, bgColorInverse, font } = useDesign();

  const getTextTheme = () => {
    if (theme === Theme.Normal) {
      return "text-brown_200"
    }

    if (theme === Theme.Light) {
      return "text-brown_300"
    }

    if (theme === Theme.Dark) {
      return "text-brown_100"
    }
  }

  const changeTheme = () => {
    const t = theme;

    if (t === Theme.Normal) {
      updateTheme(Theme.Light);
      return
    }

    if (t === Theme.Light) {
      updateTheme(Theme.Dark);
      return
    }

    updateTheme(Theme.Normal);
  }

  const getButton = () => {
    if (theme === Theme.Normal) {
      return "bg-bronw_100 text-brown_200 border-light border-[1px]"
    }

    if (theme === Theme.Light) {
      return "bg-light text-brown_100 border-brown_300 border-[1px]"
    }

    if (theme === Theme.Dark) {
      return "bg-dark text-brown_100 border-brown_100 border-[1px]"
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled={false}
        // keyboardVerticalOffset={0}
        className={`
          flex-1 w-full px-4 items-center
          ${screenTheme('bg')}
        `}
        style={GAP[16]}
      >
		{
			theme === Theme.Dark ? <StatusBar backgroundColor="transparent" style="light" /> : 
			<StatusBar backgroundColor="transparent" />
		}

        <View className="w-full py-4" style={GAP[4]}>
          <Text
            className={`
              font-fresca w-full place-items-start
              ${font('4xl') + " " + getTextTheme()}
            `}
          >
            Bem-vindo de volta!
          </Text>
          <Text
            className={`
              font-montserrat-medium w-full place-items-start mb-8
              ${font('case') + " " + getTextTheme()}
            `}
          >
            Entre na sua conta
          </Text>
        </View>

		<InputText 
			placeholder="Digite seu email"
			value={form.email || ""}
			onChangeText={(text: string) => {
				setForm((prev) => {
					return { ...prev, email: text };
				});
			}}
			text="Email"
		/>

		<InputPassword
			placeholder="Digite sua senha"
			value={form.password || ""}
			onChangeText={(text: string) => {
				setForm((prev) => {
					return { ...prev, password: text };
				});
			}}
			text="Senha"
		/>

        <Pressable onPress={() => {}} className="w-full items-center">
          <Text
            className={`
				font-montserrat-semibold text-green_400 w-full
				${font('base')}
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
              ${font('lg')}
            `}>
              Entrar
            </Text>
          </Pressable>
        )}

        <View className="flex-row w-full justify-center">
          <Text
            className={`
				font-montserrat-medium h-5
				${Platform.OS === "ios" ? "text-sm" : "text-base"}
        ${getTextTheme()}
				`}
          >
            Não tem conta? {`\n`}
          </Text>
          <Pressable
            onPress={() => {
				navigation.navigate('AccountType')
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
          <View className={`flex-1 h-[1px] bg-brown_300 ${bgColorInverse('bg')}`}></View>
          <Text className={`font-montserrat-regular text-16 ${textColor()}`}>Ou com</Text>
          <View className={`flex-1 h-[1px] bg-brown_300 ${bgColorInverse('bg')}`}></View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={COLORS.green_400} />
        ) : (
          <Pressable
            onPress={() => changeTheme() }
            className={`
              py-4 w-full items-center rounded-xl flex-row justify-center bg-[#FFF] mb-6
              ${getButton()}
            `}
            style={GAP[8]}
          >
            <IGoogle />
            <Text className={`
              font-montserrat-semibold
              ${font('lg') + " " + getTextTheme()}
            `}>
              Entrar com o Google
            </Text>
          </Pressable>
        )}

		{
			theme === Theme.Dark ? <JaoLoginDark className="absolute -right-[20%] -top-4"/> 
			: <JaoLogin className="absolute -right-[20%] -top-4"/>
		}

		{Platform.OS === "ios" ? null : <View className="flex-1"></View>}

        {
          Platform.OS === "ios" ? (
            <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              enabled={false}
              className="flex-1 justify-end">
              {theme === Theme.Dark ? <HorizontalGroup bg={COLORS.green_500} veg={COLORS.green_400} />
              : <HorizontalGroup />}
            </KeyboardAvoidingView>
          ) 
          : theme === Theme.Dark ? <HorizontalGroup bg={COLORS.green_500} veg={COLORS.green_400} />
		  : <HorizontalGroup />
        }
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

