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
import DMVScreen1 from "./screens/DMVU18/DMVScreen1";
import DMVScreen2 from "./screens/DMVU18/DMVScreen2";
import DMVScreen3 from "./screens/DMVU18/DMVScreen3";
import HomeBackButton from "./components/HomeBackButton";
import DMVScreen4 from "./screens/DMVU18/DMVScreen4";
import DMVScreen5 from "./screens/DMVU18/DMVScreen5";
import DMVScreen6 from "./screens/DMVU18/DMVScreen6";
import DMVScreen7 from "./screens/DMVU18/DMVScreen7";
import DMVScreen8 from "./screens/DMVU18/DMVScreen8";
import DMVScreen9 from "./screens/DMVU18/DMVScreen9";
import DMVScreen10 from "./screens/DMVU18/DMVScreen10";
import DMVScreen11 from "./screens/DMVU18/DMVScreen11";
import DMVScreen12 from "./screens/DMVU18/DMVScreen12";


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
            <Stack.Screen name={"DMVScreen1"} component={DMVScreen1}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen2"} component={DMVScreen2}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen3"} component={DMVScreen3}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen4"} component={DMVScreen4}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen5"} component={DMVScreen5}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen6"} component={DMVScreen6}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen7"} component={DMVScreen7}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen8"} component={DMVScreen8}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen9"} component={DMVScreen9}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen10"} component={DMVScreen10}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen11"} component={DMVScreen11}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen12"} component={DMVScreen12}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}