import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function Screen1 (){
  const navigation = useNavigation();

  return (
    <SafeAreaView className={"bg-white m-5 flex-row"}>
      <View className={"flex-1"}>
        <Text>
          The first step of the process is to complete Drivers Ed. It is recommended that you do your drivers ed around 2 months before
          you turn 15.5 years old, as at 15.5 years old you can get your permit, and Drivers Ed is required to get your permit.
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("DMVScreen2")}>
        <ChevronRightIcon height={20} width={20}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}