import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function Screen1 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white ml-4 p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            The first step of the process is to complete Drivers Ed. It is recommended that you do your drivers ed around 2 months before
            you turn 15.5 years old, as at 15.5 years old you can get your permit, and Drivers Ed is required to get your permit.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVScreen2")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}