import {SafeAreaView, ScrollView, Text, TouchableOpacity, View,} from 'react-native';
import {useLayoutEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
import {TailwindProvider} from "tailwindcss-react-native";
import {useSelector} from "react-redux";
import Topic from "../components/Topic";
import {Cog6ToothIcon} from "react-native-heroicons/mini";

export default function HomeScreen(){
  const navigation = useNavigation();
  const language = useSelector(state => state.language.language);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  if(language === ""){
    navigation.navigate("LanguageSelector");
  }

  return (
    <TailwindProvider>
      <SafeAreaView className={"flex-1 bg-white"}>
        <View className={"bg-[#00cc81] justify-center items-center h-20 pt-5 border-b-2 mb-3 flex-row"}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")} className={"absolute left-5 top-8"}>
            <Cog6ToothIcon height={30} width={30} color={"black"}/>
          </TouchableOpacity>
          <Text className={"text-3xl"}>
            Resourcify
          </Text>
        </View>

        <ScrollView>
          <View className={"flex-row justify-around"}>
            <Topic className="flex-1" title={"Housing"}
                   description={"Best locations for houses in the area, based on price, schools, crime rate, and more."}
                   screenToNavigate={"Housing"}/>
            <Topic className="flex-1" title={"Shelters"} description={"Description"} screenToNavigate={"Shelters"}/>
          </View>

          <View className={"flex-row justify-around"}>
            <Topic className="flex-1" title={"Food"} description={"Description"} screenToNavigate={""}/>
            <Topic className="flex-1" title={"Financial Resources"} description={"Description"}
                   screenToNavigate={""}/>
          </View>

          <View className={"flex-row justify-around"}>
            <Topic className="flex-1" title={"Schools"} description={"Description"} screenToNavigate={""}/>
            <Topic className="flex-1" title={"Financial Literacy"} description={"Description"} screenToNavigate={""}/>
          </View>

          <View className={"flex-row justify-around"}>
            <Topic className="flex-1" title={"Clothes"} description={"Description"} screenToNavigate={""}/>
            <Topic className="flex-1" title={"DMV"} description={"Description"} screenToNavigate={""}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TailwindProvider>
  );
}
