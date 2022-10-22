import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function DMVScreen (){
  const navigation = useNavigation();

  return (
    <SafeAreaView className={"flex-1"}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("DMV18PlusScreen1");
      }}>
        <View className={"px-5 py-10 justify-center border-y-2 border-gray"}>
          <Text className={"text-2xl"}>
            If you are over the age of 18 and you do not have a license, click here
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate("DMVNFCAScreen1");
      }}>
        <View className={"px-5 py-10 justify-center border-y-2 border-gray"}>
          <Text className={"text-2xl"}>
            If you are over the age of 18 and you have a license from another state or country, click here
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate("DMVU18Screen1");
      }}>
        <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
          <Text className={"text-2xl"}>
            If you are under the age of 18, click here
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate("DMVNLPScreen1");
      }}>
        <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
          <Text className={"text-2xl"}>
            If you are unable to provide proof of legal presence in California, click here
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
