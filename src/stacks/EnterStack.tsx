import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDesign } from "../design/useDesign";
import LoginScreen from "../screens/LoginScreen";
import Header from "../navigators/Header";
import AccountTypeScreen from "../screens/AccountTypeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgetPasswordScreen from "../screens/ForgetPasswordScreen";
import VerificationEmailScreen from "../screens/VerificationEmailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
const Stack = createNativeStackNavigator();

export const EnterStack = () => {
    const { screenThemeHex } = useDesign();

    return (
        <Stack.Navigator
            initialRouteName="Welcome"
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

            <Stack.Screen
                name="ForgetPassword"
                component={ForgetPasswordScreen}
                options={{
                    header: props => <Header props={props} bag={false} back={true} />
                }}
            />

            <Stack.Screen
                name="VerificationEmail"
                component={VerificationEmailScreen}
                options={{
                    header: props => <Header props={props} bag={false} back={true} />
                }}
            />

            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    header: props => <Header props={props} bag={false} back={false} />
                }}
            />
        </Stack.Navigator>
    );
};
