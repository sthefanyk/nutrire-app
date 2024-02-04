import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './InitialScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createNativeStackNavigator();

export const Loged = () => {
    return (
        <Stack.Navigator initialRouteName='Initial'>
            <Stack.Screen name='Initial' component={InitialScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
        </Stack.Navigator>
    )
}