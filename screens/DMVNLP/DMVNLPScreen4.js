import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVNLPScreen4 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNLPScreen3")}>
          <ChevronLeftIcon size={48} color={"black"}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            "Your driver's license will remain valid until the expiration date printed on the card.
            If you no longer maintain U.S. legal presence, you can convert your driver's license to an AB 60 driver's license." -California DMV
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}