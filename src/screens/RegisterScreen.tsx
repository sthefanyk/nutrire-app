import {
    ActivityIndicator,
    Pressable,
    Text,
    TextInput,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../design/Colors";
import { useAuth } from "../context/auth";
import JaoWaving from "../assets/svgs/mascot/small/JaoWaving";

import { KeyboardAvoidingView, Platform } from "react-native";
import GAP from "../design/gap";
import IGoogle from "../assets/icons/IGoogle";
import { StatusBar } from "expo-status-bar";
import { RegisterType } from "../types/RegisterType";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPasswod";
import { Theme } from "../enums/Theme";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";

const RegisterScreen = ({ navigation }: any) => {
    const [form, setForm] = useState<RegisterType>({} as RegisterType);
    const { theme, updateTheme } = useTheme();
    const { screenTheme, textColor, bgColorInverse, font } = useDesign();

    const { login, loading } = useAuth();

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

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				enabled={true}
				keyboardVerticalOffset={30}
				className={`flex-1 w-full px-4 items-center ${screenTheme('bg')}`}
				style={GAP[16]}
			>
				{theme === Theme.Dark ? (
					<StatusBar
						backgroundColor="transparent"
						style="light"
					/>
				) : (
					<StatusBar backgroundColor="transparent" />
				)}
				<View className="w-full py-4" style={GAP[4]}>
					<Text
						className={`
							font-fresca text-brown_200 w-full place-items-start
							${font('4xl') + " " + textColor()}
						`}
					>
						Cadastrar-se
					</Text>
					<Text
						className={`
							font-montserrat-medium text-brown_200 w-full place-items-start
							${font('base') + " " + textColor()}
						`}
					>
						Crie sua conta
					</Text>
				</View>

				<InputText
					placeholder="Digite seu nome"
					value={form.name || ""}
					onChangeText={(text: string) => {
						setForm((prev) => {
							return { ...prev, name: text };
						});
					}}
					text="Nome"
				/>

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

				<InputPassword
					placeholder="Digite sua senha"
					value={form.passwordConfirm || ""}
					onChangeText={(text: string) => {
						setForm((prev) => {
							return { ...prev, passwordConfirm: text };
						});
					}}
					text="Confirme sua senha"
				/>

				{loading ? (
					<ActivityIndicator
						size="large"
						color={COLORS.green_400}
					/>
				) : (
					<Pressable
						onPress={() =>
							login(form.email || "", form.password || "")
						}
						className={`bg-green_400 py-4 w-full items-center rounded-xl mt-1`}
					>
						<Text
							className={`
								font-montserrat-semibold text-brown_100 
								${font('lg')}
							`}
						>
							Cadastrar
						</Text>
					</Pressable>
				)}

				<View className="flex-row w-full justify-center">
					<Text
						className={`
							font-montserrat-medium h-5
							${font('base') + " " + textColor()}
						`}
					>
						Já tem conta? {`\n`}
					</Text>
					<Pressable
						onPress={() => {
							navigation.navigate("Login");
						}}
						className=" justify-center items-center h-5"
					>
						<Text
							className={`
							font-montserrat-semibold text-green_400
							${Platform.OS === "ios" ? "text-sm" : "text-base"}
						`}
						>
							Entrar
						</Text>
					</Pressable>
				</View>

				<View
					className="flex-row w-full justify-center items-center opacity-40"
					style={GAP[8]}
				>
					<View className={`flex-1 h-[1px] bg-brown_300 ${bgColorInverse('bg')}`}></View>
					<Text className={`font-montserrat-regular text-16 ${textColor()}`}>Ou</Text>
					<View className={`flex-1 h-[1px] bg-brown_300 ${bgColorInverse('bg')}`}></View>
				</View>

				{loading ? (
				<ActivityIndicator size="large" color={COLORS.green_400} />
				) : (
				<Pressable
					onPress={() => changeTheme() }
					className={`
					py-4 w-full items-center rounded-xl flex-row justify-center bg-[#FFF] mb-2
					${getButton()}
					`}
					style={GAP[8]}
				>
					<IGoogle />
					<Text className={`
					font-montserrat-semibold
					${font('lg') + " " + textColor()}
					`}>
					Criar conta com o Google
					</Text>
				</Pressable>
				)}

				<View className="w-full items-center">
					<Text
						className={`
							font-montserrat-medium text-brown_200 h-5
							${font('base') + " " + textColor()}
						`}					
					>
						Ao cadastrar-se, você concorda com nossos {`\n`}
					</Text>
					<View className="flex-row">
						<Pressable
							onPress={() => {
								navigation.navigate("Login");
							}}
							className=" justify-center items-center h-5"
						>
							<Text
								className={`
									font-montserrat-semibold text-green_400
									${Platform.OS === "ios" ? "text-sm" : "text-base"}
								`}
							>
								Termos de uso
							</Text>
						</Pressable>

						<Text
							className={`
								font-montserrat-medium text-brown_200 h-5
								${font('base') + " " + textColor()}
							`}
						>
							{` `} e {` `}
						</Text>

						<Pressable
							onPress={() => {
								navigation.navigate("Login");
							}}
							className=" justify-center items-center h-5"
						>
							<Text
								className={`
				font-montserrat-semibold text-green_400
				${Platform.OS === "ios" ? "text-sm" : "text-base"}
			`}
							>
								Política de Privacidade
							</Text>
						</Pressable>
					</View>
				</View>
			</KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default RegisterScreen;
