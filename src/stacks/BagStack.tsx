import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BagScreen from "../screens/BagScreen";
import { useDesign } from "../design/useDesign";

const BagStack = createNativeStackNavigator();

const BagStackScreen = () => {
    const { screenThemeHex } = useDesign();

    return (
        <BagStack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: screenThemeHex() },
            }}
        >
            <BagStack.Screen name="Bag" component={BagScreen} />
            <BagStack.Screen name="OrderConfirm" component={BagScreen} />
        </BagStack.Navigator>
    );
};

export default BagStackScreen;