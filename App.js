import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import LanguageSelectorScreen from "./screens/LanguageSelectorScreen";
import FullInfoScreen from "./screens/FullInfoScreen";
import {Provider} from "react-redux";
import {store} from "./store";
import HousingScreen from "./screens/HousingScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SheltersScreen from "./screens/SheltersScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name={"LanguageSelector"} component={LanguageSelectorScreen}
                          options={{presentation: 'fullScreenModal', headerShown: false}}/>
            <Stack.Screen name={"FullInfo"} component={FullInfoScreen}
                          options={{presentation: 'fullScreenModal', headerShown: true}}/>
            <Stack.Screen name={"Housing"} component={HousingScreen}/>
            <Stack.Screen name={"Shelters"} component={SheltersScreen}/>
            <Stack.Screen name={"Settings"} component={SettingsScreen}
                          options={{presentation: 'modal', headerShown: true,
                            headerStyle: {backgroundColor: '#00cc81',},
                            headerTitleStyle: {fontSize: 30,},}}/>
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}