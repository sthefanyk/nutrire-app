import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/ChatScreen";
import ChatOpenScreen from "../screens/ChatOpenScreen";
import Header from "../navigators/Header";
import BagScreen from "../screens/BagScreen";

const Stack = createNativeStackNavigator();

const ChatStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                header: props => <Header 
                    props={props} 
                    back={false} 
                    bag={true}
                    pathBag="BagChat"
                />
            }}
        >
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen
                name="ChatOpen"
                component={ChatOpenScreen}
                options={{
                    headerBackVisible: false,
                    header: props => <Header 
                        props={props} 
                        back={true} 
                        bag={false}
                    />
                }}
            />
            <Stack.Screen
                name="BagChat"
                component={BagScreen}
                options={{
                    headerBackVisible: false,
                    header: props => <Header 
                        props={props}
                        back={true} 
                        bag={false}
                    />
                }}
            />
        </Stack.Navigator>
    );
};

export default ChatStackScreen;
