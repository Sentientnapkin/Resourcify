import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMV18PlusScreen3 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMV18PlusScreen2")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            To see some DMV practice tests, click here on the image below.
            Scroll until you find "Regular drive (Class C)". Take these tests to practice.
        </Text>

          <TouchableOpacity className={"my-3"} onPress={() => Linking.openURL('https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/')}>
            <Image
              source={{uri: 'https://www.dmv-written-test.com/images-car/series/California_CAR_DMV_Written_Test.png'}}
              style={{width:'100%', height: 200}}
              resizeMode={"stretch"}
            />
          </TouchableOpacity>

          <Text className={"text-lg"}>
            It is recommended that you find more practice tests by searching "California DMV practice test" on Google.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMV18PlusScreen4")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}