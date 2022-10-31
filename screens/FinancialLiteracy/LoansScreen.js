import {View, Text, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React from "react";

export default function LoansScreen (){
  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-2xl"}>
            For families: {"\n"}
          </Text>

          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.rd.usda.gov/programs-services/single-family-housing-programs/single-family-housing-repair-loans-grants/ca')}>
            <Text className={"text-blue-500 text-lg"}>
              Single Family Housing Repair Loans & Grants in California | Rural Development {"\n"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.govloans.gov/loan-finder/')}>
            <Text className={"text-blue-500 text-lg"}>
              Loan Finder | GovLoans {"\n"}
            </Text>
          </TouchableOpacity>

          <Text className={"text-2xl"}>
            For refugees: {"\n"}
          </Text>
          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.moneygeek.com/financial-planning/support-and-resources-for-refugees/')}>
            <Text className={"text-blue-500 text-lg"}>
              Financial Support and Resources for Refugees Arriving in the US {"\n"}
            </Text>
          </TouchableOpacity>

          <Text className={"text-2xl"}>
            For students: {"\n"}
          </Text>
          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://studentaid.gov/understand-aid/types')}>
            <Text className={"text-blue-500 text-lg"}>
              Types of Financial Aid: Loans, Grants, and Work-Study Programs {"\n"}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}