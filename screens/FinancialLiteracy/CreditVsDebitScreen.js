import {View, Text, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React from "react";

export default function CreditVsDebitScreen (){
  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.investopedia.com/articles/personal-finance/050214/credit-vs-debit-cards-which-better.asp')}>
            <Text className={"text-blue-500 text-xl"}>
              Credit Cards vs. Debit Cards: What’s the Difference? {"\n"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.cnbc.com/select/cash-debit-or-credit-for-everyday-purchases/')}>
            <Text className={"text-blue-500 text-xl"}>
              Should you use credit, debit or cash for everyday purchases?
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}