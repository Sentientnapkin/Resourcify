import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function DMV18PlusScreen (){
  const navigation = useNavigation();

  return (
    <SafeAreaView className={"flex-1"}>
      <Text>DMV18PlusScreen</Text>
    </SafeAreaView>
  );
}
