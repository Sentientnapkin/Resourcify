import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVNLPScreen2 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNLPScreen1")}>
          <ChevronLeftIcon size={48} color={"black"}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            "This includes all U.S. citizens, permanent residents who are not U.S. citizens (Green Card holders),
            and those with temporary legal status, such as recipients of Deferred Action for Childhood Arrivals (DACA) or
            Temporary Protected Status (TPS) and holders of a valid student or employment visa. For Californians with temporary legal status,
            their driver's license/ID card will expire depending on their immigration status, will expire on the same date as their U.S. legal presence document,
            and they can receive a new card with a documented extension of their legal status." -California DMV
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNLPScreen3")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}