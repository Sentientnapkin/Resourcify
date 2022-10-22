import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMV18PlusScreen5 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMV18PlusScreen4")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            When you visit the DMV to take your drive test, you will first: {"\n"}
            -Bring your California Identification Card or proof of identity and residency. (Federal Noncompliant/REAL ID/AB60) {"\n"}
            -Pay the application fee. {"\n"}
            -Pass a vision exam. {"\n"}
            -Take a photo. {"\n"}
          </Text>

          <Text className={"text-lg"}>
            Arrive 1 hour before the appointment to be sure you make it in on time, as the DMV can often have very long
            wait times. You can take the test as many times as you want, but you must wait a week between each attempt.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMV18PlusScreen6")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}