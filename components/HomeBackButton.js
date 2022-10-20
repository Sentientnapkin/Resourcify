import {TouchableOpacity} from 'react-native';
import React from "react";
import {ArrowLeftIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function HomeBackButton (){
  const navigation = useNavigation();

  return (
    <TouchableOpacity className={"mr-8"} onPress={() => navigation.navigate("Home")}>
        <ArrowLeftIcon size={24} color={"black"}/>
    </TouchableOpacity>
  );
}