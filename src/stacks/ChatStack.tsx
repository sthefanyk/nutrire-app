import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/ChatScreen";
import ChatOpenScreen from "../screens/ChatOpenScreen";
import Header from "../navigators/Header";

const ChatStack = createNativeStackNavigator();

const ChatStackScreen = () => {
    return (
        <ChatStack.Navigator
            screenOptions={{
                headerShown: true,
                header: props => <Header 
                    props={props} 
                    back={false} 
                    bag={true}
                />
            }}
        >
            <ChatStack.Screen name="Chat" component={ChatScreen} />
            <ChatStack.Screen
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
        </ChatStack.Navigator>
    );
};

export default ChatStackScreen;
