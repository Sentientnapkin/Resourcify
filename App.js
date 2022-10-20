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
import DMVScreen from "./screens/DMVScreen";
import DMV18PlusScreen from "./screens/DMV18PlusScreen";
import Screen1 from "./screens/DMVU18/Screen1";
import Screen2 from "./screens/DMVU18/Screen2";
import Screen3 from "./screens/DMVU18/Screen3";


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
            <Stack.Screen name={"DMV"} component={DMVScreen}
                          options={{headerStyle: {backgroundColor: '#00cc81'},
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"Settings"} component={SettingsScreen}
                          options={{presentation: 'modal', headerShown: true,
                            headerStyle: {backgroundColor: '#00cc81',},
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMV18Plus"} component={DMV18PlusScreen}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen1"} component={Screen1}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen2"} component={Screen2}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen3"} component={Screen3}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}