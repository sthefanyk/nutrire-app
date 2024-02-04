import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../design/color'
import { useAuth } from '../../context/auth'

const InitialScreen = () => {

  const { logout, loading, userData } = useAuth();
  return (
    <View className="flex-1 justify-center items-center gap-2 bg">
	  <Text className='text-3xl font-regular font-fresca'>NUTRIRE</Text>
      <Image source={{uri: userData.photo}} className='w-52 h-52 rounded-full bg-black  mb-20' />
	  <Text className='text-xl font-montserrat-bold'>Nome: {userData.name}</Text>
	  <Text className='text-xl font-montserrat-semibold'>Nome: {userData.name}</Text>
	  <Text className='text-xl font-montserrat-medium'>Nome: {userData.name}</Text>
	  <Text className='text-xl font-montserrat-regular'>Nome: {userData.name}</Text>
	  <Text className='text-xl font-montserrat-light'>Nome: {userData.name}</Text>
	  <Text className='text-xl font-montserrat'>E-mail: {userData.email}</Text>
	  <Text className='text-xl font-bold mb-20'>E-mail: {userData.email}</Text>
      {
		loading ? (
			<ActivityIndicator size="large" color={COLORS.red} />
		) : (
			<Button 
				title='Deslogar'
				color={COLORS.red}
				onPress={() => logout()}
			/>
		)
	}
    </View>
  )
}

export default InitialScreen