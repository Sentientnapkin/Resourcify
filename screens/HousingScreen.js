import {View, Text, SafeAreaView} from 'react-native';
import React from "react";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import {useNavigation} from "@react-navigation/native";

export default function HousingScreen (){
  const navigation = useNavigation();

    return(
        <SafeAreaView className={"flex-1"}>

        </SafeAreaView>
    );
}
