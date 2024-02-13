import {
    ActivityIndicator,
    Pressable,
    Text,
    View,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../design/Colors";

import { KeyboardAvoidingView, Platform } from "react-native";
import GAP from "../design/gap";
import { StatusBar } from "expo-status-bar";
import { RegisterType } from "../types/RegisterType";
import InputText from "../components/InputText";
import { Theme } from "../enums/Theme";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import IAddImage from "../assets/icons/IAddImage";

const RegisterProductScreen = ({ navigation }: any) => {
    const [form, setForm] = useState<RegisterType>({} as RegisterType);
    const { theme } = useTheme();
	const [loading, setLoading ] = useState(false);
    const { 
		screenTheme, 
		textColor,
		font, screenThemeHex, 
		textColorHex,
		inputTheme,
		inputThemeHex
	} = useDesign();


    return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			enabled={true}
			keyboardVerticalOffset={120}
			className={`flex-1 w-full px-4 items-center ${screenTheme()} overflow-hidden`}
			style={[GAP[16], { backgroundColor: screenThemeHex() }]}
		>
			{theme === Theme.Dark ? (
				<StatusBar backgroundColor="transparent" style="light" />
			) : (
				<StatusBar backgroundColor="transparent" />
			)}

			<ScrollView className="w-full" showsVerticalScrollIndicator={false}>
				
				<View className="w-full py-2 mb-4" style={GAP[4]}>
					<Text
						className={`
							font-fresca text-brown_200 w-full place-items-start
							${font("3xl") + " " + textColor()}
						`}
					>
						Novo produto
					</Text>
					{/* <Text
						className={`
							font-montserrat-medium text-brown_200 w-full place-items-start
							${font("sm") + " " + textColor()}
						`}
					>
						Crie sua conta
					</Text> */}
				</View>

				<View className={`
					w-full justify-center items-center h-[150px]
					${inputTheme()} rounded-lg overflow-hidden mb-4
				`}>
					<IAddImage
						color={textColorHex()}
						bg={inputThemeHex()}
					/>
					<Text className={`${textColor()} font-montserrat-medium ${font('lg')}`}
					>Adicionar fotos</Text>
				</View>

				<View className="w-full mb-4">
					<InputText
						placeholder="Ex.: Batata"
						value={form.name || ""}
						onChangeText={(text: string) => {
							setForm((prev) => {
								return { ...prev, name: text };
							});
						}}
						text="Produto"
					/>
				</View>

				
				<View className="w-full mb-4">		
					<InputText
						placeholder="Ex.: Legume"
						value={form.email || ""}
						onChangeText={(text: string) => {
							setForm((prev) => {
								return { ...prev, email: text };
							});
						}}
						text="Classificação"
					/>
				</View>

				<View className="w-full mb-4">
					<InputText
						placeholder="Ex.: 8,99/Kg"
						value={form.email || ""}
						onChangeText={(text: string) => {
							setForm((prev) => {
								return { ...prev, email: text };
							});
						}}
						text="Valor"
					/>
				</View>

				<View className="w-full mb-4">
					<InputText
						placeholder="Ex.: Reserva"
						value={form.email || ""}
						onChangeText={(text: string) => {
							setForm((prev) => {
								return { ...prev, email: text };
							});
						}}
						text="Categoria"
					/>
				</View>

				<View className="w-full mb-4">
					<InputText
						placeholder="Ex.: 20kg"
						value={form.email || ""}
						onChangeText={(text: string) => {
							setForm((prev) => {
								return { ...prev, email: text };
							});
						}}
						text="Disponível"
					/>
				</View>
				<View className="flex-row w-full gap-2 mb-10">
					{loading ? (
						<ActivityIndicator size="large" color={COLORS.green_400} />
					) : (
						<Pressable
							onPress={() => {}}
							className={`flex-1 border-green_400 border-2 py-3 items-center rounded-xl`}
						>
							<Text
								className={`
									font-montserrat-semibold text-green_400
									${font("base")}
								`}
							>
								Cancelar
							</Text>
						</Pressable>
					)}
					{loading ? (
						<ActivityIndicator size="large" color={COLORS.green_400} />
					) : (
						<Pressable
							onPress={() => {}}
							className={`flex-1 bg-green_400 py-3 w-full items-center rounded-xl`}
						>
							<Text
								className={`
									font-montserrat-semibold text-brown_100 
									${font("base")}
								`}
							>
								Publicar
							</Text>
						</Pressable>
					)}
				</View>
			</ScrollView>

							
		</KeyboardAvoidingView>
    );
};

export default RegisterProductScreen;
