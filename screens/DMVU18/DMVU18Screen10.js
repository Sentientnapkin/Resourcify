import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVScreen7 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVU18Screen9")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            6 months after you passed the permit test, you are able to take the behind the wheel test. To schedule an appointment,
            click on the image below and select "Automobile" for behind the wheel test. Put in the number for your permit where it asks
          </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.dmv.ca.gov/portal/appointments/select-appointment-type')}>
            <Image
              source={{uri: 'https://www.dmv.ca.gov/portal/uploads/2022/06/DMV_Logo.png'}}
              style={{width: '100%', height: 220}}
              resizeMode={"stretch"}
            />
          </TouchableOpacity>

          <Text className={"text-lg"}>
            Arrive 1 hour before the appointment to be sure you make it in on time, as the DMV can often have very long
            wait times. You can take the test as many times as you want, but you must wait a week between each attempt.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVScreen11")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}