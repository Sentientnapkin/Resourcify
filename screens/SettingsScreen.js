import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function SettingsScreen (){
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className={"flex-1"}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Home");
          navigation.navigate("LanguageSelector")
        }}>
          <View className={"px-5 py-7 justify-center border-y-2 border-gray"}>
            <Text className={"text-xl"}>
              Language Settings
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}