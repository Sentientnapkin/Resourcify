import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function BudgetingScreen2 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("BudgetingScreen1")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-2xl font-bold"}>
            Step 2: List your expenses {"\n"}
          </Text>
          <Text className={"text-xl"}>
            Once you’ve got your total monthly income figured out, your next step is to plan for all your monthly expenses. (This is when you’ll use your bank account to get a better idea of your spending.) {"\n"}
            Prioritize food, utilities, shelter, and transportation.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("BudgetingScreen3")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}