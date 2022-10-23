import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVNFCAScreen6 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNFCAScreen5")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            You can take the behind the wheel test as soon as you have your permit,
            but if you have no driving experience, give yourself some time to learn before you take the test.
            To schedule a different appointment,
            click on the image below and select "Automobile" for behind the wheel test.
            Put in the number for your permit where it asks
          </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.dmv.ca.gov/portal/appointments/select-appointment-type')}>
            <Image
              source={{uri: 'https://www.dmv.ca.gov/portal/uploads/2022/06/DMV_Logo.png'}}
              style={{width: '100%', height: 180}}
              resizeMode={"stretch"}
            />
          </TouchableOpacity>

          <Text className={"text-lg"}>
            Arrive 1 hour before the appointment to be sure you make it in on time, as the DMV can often have very long
            wait times. You can take the test as 3 times before you must pay a fee, but you must wait 2 weeks between each attempt.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVNFCAScreen7")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}