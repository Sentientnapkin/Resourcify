import {View, Text, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React from "react";

export default function FraudScamsScreen (){
  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://fraud.org/prevention-tips/')}>
            <Text className={"text-blue-500 text-xl"}>
              Fraud Prevention tips {"\n"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://portal.ct.gov/SmartConsumer/SmartConsumer/Immigrants-and-Refugees/Common-Scams-Targeting-Immigrants---Know')}>
            <Text className={"text-blue-500 text-xl"}>
              Common Scams Targeting Immigrants
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}