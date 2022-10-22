import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVU18Screen7 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVU18Screen6")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            Passing the permit test allows the driver to have a drive permit, which allows you to drive with a legal guardian
             or adult age 25 or older in the car.
            To start the permit test application, click here on the image below.
          </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/')}>
            <Image
              source={{uri: 'https://www.dmv.ca.gov/portal/uploads/2022/06/DMV_Logo.png'}}
              style={{width: '100%', height: 220}}
              resizeMode={"stretch"}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVU18Screen8")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}