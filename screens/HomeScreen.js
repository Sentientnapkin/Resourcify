import { ScrollView, Text, TouchableOpacity, View,} from 'react-native';
import {useEffect, useLayoutEffect} from 'react';
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

  useEffect(() => {
    if(language === ""){
      navigation.navigate("LanguageSelector");
    }
  }, []);

  return (
    <TailwindProvider>
      <View className={"bg-[#00cc81] justify-center items-center h-28 pt-5 border-b-2 flex-row"}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} className={"absolute left-5 top-12"}>
          <Cog6ToothIcon height={30} width={30} color={"black"}/>
        </TouchableOpacity>
        <View className={"mt-3"}>
          <Text className={"text-3xl"}>
            Resourcify
          </Text>
        </View>
      </View>
      <View className={"flex-1 bg-white"}>
        <ScrollView>
            <Topic className="flex-1" title={"Housing"}
                   description={"Best locations for houses in the area, based on price, schools, crime rate, and more."}
                   image={"https://img.icons8.com/office/344/cottage.png"}
                   screenToNavigate={"Housing"}/>
            <Topic className="flex-1" title={"Shelters"} description={"Find shelters in your area."}
                   image={"https://cdn.iconscout.com/icon/free/png-256/shelter-in-place-2314600-1962039.png"}
                   screenToNavigate={"Shelters"}/>
            <Topic className="flex-1" title={"Food"} description={"Food Banks and Soup Kitchens in your area."}
                   image={"https://img.icons8.com/office/344/rice-bowl.png"}
                   screenToNavigate={"Food"}/>
            <Topic className="flex-1" title={"Schools"} description={"Ratings of every school in Fremont."}
                   image={"https://img.icons8.com/office/344/school.png"}
                   screenToNavigate={"Schools"}/>
            <Topic className="flex-1" title={"Financial Literacy"} description={"Resources for understanding how to manage your money, paying taxes, how to avoid scams, and more."}
                   image={"https://img.icons8.com/office/344/online-payment-with-a-credit-card.png"}
                   screenToNavigate={"Financial Literacy"}/>
            <Topic className="flex-1" title={"Clothes"} description={"Affordable clothes in your area."}
                   image={"https://img.icons8.com/office/344/clothes.png"}
                   screenToNavigate={"Clothes"}/>
            <Topic className="flex-1" title={"DMV"} description={"A guide on how to get a drivers license and more at the Department of Motor Vehicles."}
                   image={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/California_Department_of_Motor_Vehicles_logo.svg/480px-California_Department_of_Motor_Vehicles_logo.svg.png"}
                   screenToNavigate={"DMV"}/>

          {/**
            <Topic className="flex-1" title={"Financial Resources"} description={"Description"}
                    image={"https://img.icons8.com/office/344/money.png"}
                   screenToNavigate={""}/>
           **/}
            </ScrollView>
      </View>
    </TailwindProvider>
  );
}
