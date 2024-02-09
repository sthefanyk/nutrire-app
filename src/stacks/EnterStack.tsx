import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDesign } from "../design/useDesign";
import LoginScreen from "../screens/LoginScreen";
import Header from "../navigators/Header";
import AccountTypeScreen from "../screens/AccountTypeScreen";
import RegisterScreen from "../screens/RegisterScreen";
const Stack = createNativeStackNavigator();

export const EnterStack = () => {
    const { screenThemeHex } = useDesign();

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerStyle: { backgroundColor: screenThemeHex() },
                header: props => <Header props={props} back={false} bag={false} />
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />

            <Stack.Screen
                name="AccountType"
                component={AccountTypeScreen}
                options={{
                    header: props => <Header props={props} bag={false} back={true} />
                }}
            />

            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    header: props => <Header props={props} bag={false} back={true}/>
                }}
            />
        </Stack.Navigator>
    );
};
