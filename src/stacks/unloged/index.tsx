import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { COLORS } from '../../design/color';
import EnterScreen from './EnterScreen';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const Stack = createNativeStackNavigator();

export const Unloged = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Enter'
            screenOptions={{ 
                headerStyle: { backgroundColor: COLORS.brown_100 }
            }}
        >
            <Stack.Screen name='Enter' component={EnterScreen} 
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    )
}