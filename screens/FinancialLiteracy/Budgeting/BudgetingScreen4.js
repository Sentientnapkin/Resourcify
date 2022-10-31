import {View, Text, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React from "react";
import {ChevronLeftIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function BudgetingScreen4 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("BudgetingScreen3")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-2xl font-bold"}>
            Step 3: Subtract your expenses from your income {"\n"}
          </Text>
          <Text className={"text-xl"}>
            There are a lot of budgeting methods out there, but zero-based budgeting is the best. When you subtract your expenses from your income, it should equal zero. You can use EveryDollar, an app that will do the math for you.  That might sound like you’re spending all your money in one month, but it really just means every dollar you’re making should have a job to do inside your budget—whether it’s giving, saving, spending, or paying off debt.
          </Text>

          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.nerdwallet.com/article/finance/budget-worksheet')}>
            <Text className={"text-blue-500 text-xl"}>
              {"\n"} Free Budget Planner Worksheet - NerdWallet
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}