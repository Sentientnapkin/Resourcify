import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVNFCAScreen4 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNFCAScreen3")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-md"}>
            -Provide your social security number (SSN).
            -Prove your identity with an acceptable identity document (original or certified copy) for either a Federal Non-Compliant or REAL ID Compliant DL/ID Card. Your current name needs to match the name on the identity document (see the FAQs below for more information). {"\n"}
            -Present acceptable residency documents (if you have never had a California DL/ID). {"\n"}
            -Pay the nonrefundable application fee (application and fee valid for 12 months). {"\n"}
            -Have your thumbprint scanned. {"\n"}
            -Pass a vision exam. {"\n"}
            -Have your photo taken. {"\n\n"}
          </Text>

          <Text className={"text-lg"}>
            Arrive 1 hour before the appointment to be sure you make it in on time, as the DMV can often have very long
            wait times. You can take the test as many times as you want, but you must wait a week between each attempt.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNFCAScreen5")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}