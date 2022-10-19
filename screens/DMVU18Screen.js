import {View, Text, TouchableOpacity, SafeAreaView, Linking, Image} from 'react-native';
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function DMVU18Screen (){
  const navigation = useNavigation();

  return (
    <SafeAreaView className={"flex-1 bg-white"}>
      <Text>
        The first step of the process is to complete Drivers Ed.
        Drivers Ed is usually 30 hour course that you can take online or in person.
        Some online courses can take under 30 hours, and they still count as a completed drivers ed course.
        One such course can be seen if you click {""}
        <Text onPress={() => Linking.openURL('https://www.mycaliforniapermit.com')}>
          here
        </Text>
        :
      </Text>
      <TouchableOpacity className={"flex-1"} onPress={() => Linking.openURL('https://www.mycaliforniapermit.com')}>
        <Image
          source={require('../assets/MyCaliforniaPermit.png')}
          style={{width:'100%', height: '37%'}}
          resizeMode={"stretch"}
        />
      </TouchableOpacity>

      <Text>

      </Text>
    </SafeAreaView>
  );
}
