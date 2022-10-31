import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function BudgetingScreen1 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-2xl font-bold"}>
            Step 1: List your income. {"\n"}
          </Text>
          <Text className={"text-xl"}>
            Every budget starts with your income, no matter how much you make. Because you can’t know how much you’re able to spend for the month if you don’t know how much is coming in, right? {"\n"}
            Start by listing out all your sources of income. This includes salaries, part-time work, side hustles, stipends, child support, disability, and social security.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("BudgetingScreen2")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}