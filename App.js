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
import DMVU18Screen13 from "./screens/DMVU18/DMVU18Screen13";
import DMV18PlusScreen1 from "./screens/DMV18Plus/DMV18PlusScreen1";
import DMV18PlusScreen2 from "./screens/DMV18Plus/DMV18PlusScreen2";
import DMV18PlusScreen3 from "./screens/DMV18Plus/DMV18PlusScreen3";
import DMV18PlusScreen4 from "./screens/DMV18Plus/DMV18PlusScreen4";
import DMV18PlusScreen5 from "./screens/DMV18Plus/DMV18PlusScreen5";
import DMV18PlusScreen6 from "./screens/DMV18Plus/DMV18PlusScreen6";
import DMV18PlusScreen7 from "./screens/DMV18Plus/DMV18PlusScreen7";
import DMV18PlusScreen8 from "./screens/DMV18Plus/DMV18PlusScreen8";
import DMVNFCAScreen1 from "./screens/DMVNFCA/DMVNFCAScreen1";
import DMVNFCAScreen2 from "./screens/DMVNFCA/DMVNFCAScreen2";
import DMVNFCAScreen3 from "./screens/DMVNFCA/DMVNFCAScreen3";
import DMVNFCAScreen4 from "./screens/DMVNFCA/DMVNFCAScreen4";
import DMVNFCAScreen5 from "./screens/DMVNFCA/DMVNFCAScreen5";
import DMVNFCAScreen6 from "./screens/DMVNFCA/DMVNFCAScreen6";
import DMVNFCAScreen7 from "./screens/DMVNFCA/DMVNFCAScreen7";
import DMVNLPScreen1 from "./screens/DMVNLP/DMVNLPScreen1";
import DMVNLPScreen2 from "./screens/DMVNLP/DMVNLPScreen2";
import DMVNLPScreen3 from "./screens/DMVNLP/DMVNLPScreen3";
import DMVNLPScreen4 from "./screens/DMVNLP/DMVNLPScreen4";
import ClothesScreen from "./screens/ClothesScreen";


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
            <Stack.Screen name={"Clothes"} component={ClothesScreen}
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



            <Stack.Screen name={"DMVU18Screen1"} component={DMVU18Screen1}
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
            <Stack.Screen name={"DMVU18Screen5"} component={DMVU18Screen5}
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
            <Stack.Screen name={"DMVU18Screen10"} component={DMVU18Screen10}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVU18Screen11"} component={DMVU18Screen11}
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
            <Stack.Screen name={"DMVU18Screen13"} component={DMVU18Screen13}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>


            <Stack.Screen name={"DMV18PlusScreen1"} component={DMV18PlusScreen1}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMV18PlusScreen2"} component={DMVU18Screen2}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMV18PlusScreen3"} component={DMV18PlusScreen3}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMV18PlusScreen4"} component={DMV18PlusScreen4}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMV18PlusScreen5"} component={DMV18PlusScreen5}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMV18PlusScreen6"} component={DMVU18Screen6}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMV18PlusScreen7"} component={DMV18PlusScreen7}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMV18PlusScreen8"} component={DMV18PlusScreen8}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>

            <Stack.Screen name={"DMVNFCAScreen1"} component={DMVNFCAScreen1}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNFCAScreen2"} component={DMVNFCAScreen2}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNFCAScreen3"} component={DMVNFCAScreen3}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNFCAScreen4"} component={DMVNFCAScreen4}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNFCAScreen5"} component={DMVNFCAScreen5}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNFCAScreen6"} component={DMVNFCAScreen6}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNFCAScreen7"} component={DMVNFCAScreen7}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNLPScreen1"} component={DMVNLPScreen1}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNLPScreen2"} component={DMVNLPScreen2}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNLPScreen3"} component={DMVNLPScreen3}
                          options={{headerStyle: {backgroundColor: '#00cc81',},
                            headerLeft: () => (
                              <HomeBackButton />
                            ),
                            animationTypeForReplace: 'pop',
                            title: "DMV",
                            headerTitleStyle: {fontSize: 30,},}}/>
            <Stack.Screen name={"DMVNLPScreen4"} component={DMVNLPScreen4}
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