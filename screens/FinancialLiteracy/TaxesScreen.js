import {View, Text, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React from "react";

export default function TaxesScreen (){
  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-2xl"}>
            Here is a tutorial on how the U.S tax system works: {"\n"}
          </Text>

          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://apps.irs.gov/app/understandingTaxes/student/tax_tutorials.jsp')}>
            <Text className={"text-blue-500 text-lg"}>
              https://apps.irs.gov/app/understandingTaxes/student/tax_tutorials.jsp
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}