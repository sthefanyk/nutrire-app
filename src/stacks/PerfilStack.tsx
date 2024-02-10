import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BagScreen from "../screens/BagScreen";
import { useDesign } from "../design/useDesign";
import PerfilScreen from "../screens/PerfilScreen";
import EditPerfilScreen from "../screens/EditPerfilScreen";
import Header from "../navigators/Header";
import FavoriteScreen from "../screens/FavoriteScreen";
import DetailsScreen from "../screens/DetailsScreen";
import OrderScreen from "../screens/OrderScreen";

const Stack = createNativeStackNavigator();

const PerfilStack = () => {
    const { screenThemeHex } = useDesign();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: screenThemeHex() },
                header: props => <Header 
                    props={props} 
                    back={false} 
                    bag={false}
                />
            }}
        >
            <Stack.Screen name="Perfil" component={PerfilScreen} />
            <Stack.Screen name="EditPerfil" component={EditPerfilScreen} 
                options={{
                    header: (props) => <Header
                        back={true}
                        bag={false}
                        props={props}
                    />
                }}
            />
            <Stack.Screen name="Favorite" component={FavoriteScreen} 
                options={{
                    header: (props) => <Header
                        back={true}
                        bag={true}
                        props={props}
                    />
                }}
            />
            <Stack.Screen
                name="PerfilDetails"
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
                name="Order"
                component={OrderScreen}
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

export default PerfilStack;