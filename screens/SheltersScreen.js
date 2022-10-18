import {View, Text, SafeAreaView} from 'react-native';
import React from "react";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import {useNavigation} from "@react-navigation/native";

export default function SheltersScreen (){
  const navigation = useNavigation();

  return(
    <View className={"flex-1"}>
      <SafeAreaView className={'z-50'}>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 37.532044,
          longitude: -121.980236,
          latitudeDelta: 0.18,
          longitudeDelta: 0.18,
        }}
        className={"flex-1 z-0"}
        mapType={"mutedStandard"}
      >

      </MapView>
    </View>
  );
}
