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
import DMVU18Screen1 from "./screens/DMVU18/DMVU18Screen1";
import DMVU18Screen2 from "./screens/DMVU18/DMVU18Screen2";
import DMVU18Screen3 from "./screens/DMVU18/DMVU18Screen3";
import HomeBackButton from "./components/HomeBackButton";
import DMVU18Screen4 from "./screens/DMVU18/DMVU18Screen4";
import DMVU18Screen5 from "./screens/DMVU18/DMVU18Screen5";
import DMVU18Screen6 from "./screens/DMVU18/DMVU18Screen6";
import DMVU18Screen7 from "./screens/DMVU18/DMVU18Screen7";
import DMVU18Screen8 from "./screens/DMVU18/DMVU18Screen8";
import DMVU18Screen9 from "./screens/DMVU18/DMVU18Screen9";
import DMVU18Screen10 from "./screens/DMVU18/DMVU18Screen10";
import DMVU18Screen11 from "./screens/DMVU18/DMVU18Screen11";
import DMVU18Screen12 from "./screens/DMVU18/DMVU18Screen12";


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
            <Stack.Screen name={"Shelters"} component={SheltersScreen}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            animationTypeForReplace: 'pop',
                            headerTitleStyle: {fontSize: 30,},}}/>
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
            <Stack.Screen name={"DMVScreen1"} component={DMVU18Screen1}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen2"} component={DMVU18Screen2}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen3"} component={DMVU18Screen3}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen4"} component={DMVU18Screen4}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen5"} component={DMVU18Screen5}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen6"} component={DMVU18Screen6}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen7"} component={DMVU18Screen7}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen8"} component={DMVU18Screen8}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen9"} component={DMVU18Screen9}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen10"} component={DMVU18Screen10}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVScreen11"} component={DMVU18Screen11}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen12"} component={DMVU18Screen12}
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