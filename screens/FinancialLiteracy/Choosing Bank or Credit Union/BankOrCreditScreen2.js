import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function BankOrCreditScreen2 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("BankOrCreditScreen1")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-3xl font-bold"}>
           Banks {"\n"}
          </Text>

          <Text className={"text-2xl"}>
            Good things about banks: {"\n"}
          </Text>
          <Text className={"text-xl"}>
            Accounts FDIC-insured up to $250,000 {"\n"}
            Convenience {"\n"}
            Financial technology {"\n"}
            Likely more branches and ATMs / More products offered {"\n"}
          </Text>

          <Text className={"text-2xl"}>
            Problems with banks: {"\n"}
          </Text>
          <Text className={"text-xl"}>
            More and higher fees {"\n"}
            May offer lower Annual Percent Yield (APY) on savings vehicles {"\n"}
            Higher interest rates on loans
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("BankOrCreditScreen3")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}