import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function BankOrCreditScreen1 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-2xl"}>
            Credit unions tend to have lower fees and better interest rates on savings accounts and loans, while banks’ mobile apps and online technology tend to be more advanced and easier to use.
            {"\n\n"}Credit unions are known for providing better customer service, while large national banks tend to have stricter rules and less flexibility in decision-making.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("BankOrCreditScreen2")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}