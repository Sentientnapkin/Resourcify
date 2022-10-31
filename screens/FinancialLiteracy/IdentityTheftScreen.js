import {View, Text, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React from "react";

export default function IdentityTheftScreen (){
  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.identitytheft.gov/#/')}>
            <Text className={"text-blue-500 text-xl"}>
              How to report identity theft {"\n"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.texasattorneygeneral.gov/consumer-protection/identity-theft/help-prevent-identity-theft')}>
            <Text className={"text-blue-500 text-xl"}>
              What is identity theft/how do I avoid it?
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}