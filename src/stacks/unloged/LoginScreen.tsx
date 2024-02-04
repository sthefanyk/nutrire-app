import { ActivityIndicator, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../design/color'
import { LoginType } from '../../types/LoginType';
import { useAuth } from '../../context/auth';

const LoginScreen = ({navigation} : any) => {
	const [form, setForm] = useState<LoginType>({} as LoginType);

	const { login, loading, userData } = useAuth();

	return (
		<View style={styles.container}>
			<Image 
				source={require("../../../assets/splash.png")} 
				style={styles.logo}
			/>
			<View style={styles.form}>
				<View style={styles.formSection}>
					<Text style={styles.text}>Email</Text>
					<TextInput 
						style={styles.textInput} 
						value={form.email}
						autoCapitalize='none'
						onChangeText={(value: string) => {
							setForm((prev) => {return {...prev, email:value}})
						}}
					/>
				</View>
				<View style={styles.formSection}>
					<Text style={styles.text}>Senha</Text>
					<TextInput 
						style={styles.textInput} 
						secureTextEntry
						value={form.password}
						autoCapitalize='none'
						onChangeText={(value: string) => {
							setForm((prev) => {return {...prev, password:value}})
						}}
					/>
				</View>
				{
					loading ? (
						<ActivityIndicator size="large" color={COLORS.honey} />
					) : (
						<Button 
							title='Entrar' 
							color={COLORS.green_500}
							onPress={() => login(form.email || "", form.password || "")}
						/>
					)
				}
				<Button 
					title='Criar conta' 
					color={COLORS.green_500}
					onPress={() => navigation.navigate("Register")}
				/>
				<Text>{userData.name}</Text>

			</View>
		</View>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.brown_100,
		alignItems: 'center',
		// justifyContent: 'center'
	},
	logo: {
		width: 200,
		height: 200
	},
	textInput: {
		backgroundColor: 'white',
		width: '70%',
		paddingHorizontal: 8,
		paddingVertical: 8,
		borderRadius: 5,
		fontSize: 16,

	},
	form: {
		width: '90%',
		gap: 20,
		alignItems: 'center'
	},
	formSection: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		width: '20%',
		fontWeight: 'bold'
	}
})