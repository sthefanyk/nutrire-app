import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { COLORS } from '../../design/color';
import EnterScreen from './EnterScreen';
import TypeUserScreen from './TypeUserScreen';
import { Dimensions, View, useWindowDimensions } from 'react-native';
import LogoHorizontal from '../../assets/logos/LogoHorizontal';
import React from 'react';


const Stack = createNativeStackNavigator();

export const Unloged = () => {

    const window = useWindowDimensions();
    // const window = Dimensions.get('screen');

    return (
        <Stack.Navigator 
            initialRouteName='Login'
            screenOptions={{ 
                headerStyle: { backgroundColor: COLORS.brown_100 }
            }}
        >
            <Stack.Screen name='Enter' component={EnterScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name='Login' component={LoginScreen}
                options={{
                    headerShadowVisible: false,
                    headerTitle: () => <View 
                    className='w-[90%] h-4 place-items-center items-center'
                    style={{ width: window.width, marginRight: 64}}>
                        <LogoHorizontal />
                    </View>,
                    animation: 'fade_from_bottom',
                    animationDuration: 1000,
                    animationTypeForReplace: 'push'
                }}
            />
            <Stack.Screen name='Register' component={RegisterScreen} 
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                    animation: 'fade',
                    animationTypeForReplace: 'push'
                }}
            />
            <Stack.Screen name='TypeUser' component={TypeUserScreen} 
                options={{
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
        </Stack.Navigator>
    )
}