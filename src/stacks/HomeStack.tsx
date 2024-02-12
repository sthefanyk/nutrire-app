import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../navigators/Header";
import DetailsScreen from "../screens/DetailsScreen";
import BagScreen from "../screens/BagScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeStack = ({}) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                header: props => <Header 
                    props={props} 
                    back={false} 
                    bag={true}
                    pathBag="BagHome"
                />
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="DetailsHome"
                component={DetailsScreen}
                options={{
                    headerBackVisible: false,
                    header: props => <Header 
                        props={props}
                        back={true} 
                        bag={true}
                        pathBag="BagHome"
                    />
                }}
            />
            <Stack.Screen
                name="BagHome"
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

export default HomeStack;
