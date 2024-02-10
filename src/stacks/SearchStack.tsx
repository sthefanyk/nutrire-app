import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../navigators/Header";
import SearchScreen from "../screens/SearchScreen";
import DetailsScreen from "../screens/DetailsScreen";
import BagScreen from "../screens/BagScreen";

const Stack = createNativeStackNavigator();

const SearchStack = ({}) => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                header: props => <Header 
                    props={props} 
                    back={false} 
                    bag={true}
                    pathBack="BagSearch"
                />
            }}
        >
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    headerBackVisible: false,
                    header: props => <Header 
                        props={props}
                        back={true} 
                        bag={true}
                    />
                }}
            />
            <Stack.Screen
                name="BagSearch"
                component={BagScreen}
                options={{
                    headerBackVisible: false,
                    header: props => <Header 
                        props={props}
                        back={true} 
                        bag={true}
                    />
                }}
            />
        </Stack.Navigator>
    );
};

export default SearchStack;
