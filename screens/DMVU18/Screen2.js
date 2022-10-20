import {View, Text, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React from "react";
import {ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function Screen2 (){
  const navigation = useNavigation();

  return (
      <View className={"flex-1 justify-center"}>
        <SafeAreaView className={"flex-row items-center"}>
          <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVScreen1")}>
            <ChevronLeftIcon color={"black"} size={48}/>
          </TouchableOpacity>

          <View className={"flex-1 bg-white p-3 rounded-lg"}>
            <Text className={"text-lg"}>
              Drivers Ed is usually 30 hour course that you can take online or in person.
              Some online courses can take under 30 hours, and they still count as a completed drivers ed course.
              One such course can be seen if you click here:    {""}
              <ArrowTopRightOnSquareIcon onPress={() => Linking.openURL('https://www.mycaliforniapermit.com')}/>
            </Text>
          </View>

          <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVScreen3")}>
            <ChevronRightIcon size={48} color={"black"}/>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
  );
}