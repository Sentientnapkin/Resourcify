import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVNLPScreen1 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            "Any Californian who can prove their current legal presence in the United States (U.S.)
            with one of the accepted identity documents (original or certified copy) is eligible to
            receive a standard or REAL ID driver license or identification (driver's license/ID) card." -California DMV
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNLPScreen2")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}