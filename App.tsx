import { NavigationContainer } from '@react-navigation/native';
import { Loged } from './src/stacks/loged';
import { Unloged } from './src/stacks/unloged';
import { AuthProvider, useAuth } from './src/context/auth';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

function Root() {
    const {userData } = useAuth();

    return (
        <NavigationContainer>
            { userData.name ? <Loged /> : <Unloged /> }
        </NavigationContainer>
    )
}

export default function App() {

    const [fontsLoaded] = useFonts({
        'Fresca-Regular' : require('./assets/fonts/Fresca-Regular.ttf'),
        'Montserrat-Bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold' : require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium' : require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular' : require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Light' : require('./assets/fonts/Montserrat-Light.ttf'),
        
    })

    if (!fontsLoaded) {
        return undefined;
    }
    return (
        <AuthProvider>
            <Root />
        </AuthProvider>
    );
}
