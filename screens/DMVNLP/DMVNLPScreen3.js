import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVNLPScreen3 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNLPScreen2")}>
          <ChevronLeftIcon size={48} color={"black"}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            "There are many other ways to prove that you are legally present in the United States: {"\n"}
            If you were born in the U.S., you may provide a U.S. birth certificate, passport, or passport card. {"\n"}
            If you are an immigrant to the U.S., you may provide a U.S. citizen naturalization or citizenship document, or a Permanent Resident Card. {"\n"}
            If you are a non-immigrant, but are authorized to be in the U.S., you may present a Temporary Resident Identification card or other temporary resident documentation." - California DMV
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNLPScreen4")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}