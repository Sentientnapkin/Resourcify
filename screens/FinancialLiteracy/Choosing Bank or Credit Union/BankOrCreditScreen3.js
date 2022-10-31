import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function BankOrCreditScreen3 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("BankOrCreditScreen2")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-3xl font-bold"}>
            Credit Unions {"\n"}
          </Text>

          <Text className={"text-2xl"}>
            Good things about credit unions: {"\n"}
          </Text>
          <Text className={"text-xl"}>
            May offer lower interest rates on loans {"\n"}
            Higher APYs on savings vehicles {"\n"}
            Fewer and lower fees {"\n"}
            Excellent customer service and financial education {"\n"}
            Accounts NCUA-insured up to $250,000 {"\n"}
          </Text>

          <Text className={"text-2xl"}>
            Problems with credit unions: {"\n"}
          </Text>
          <Text className={"text-xl"}>
            May have fewer branches and ATMs {"\n"}
            Less access to financial technology {"\n"}
            Fewer products offered {"\n"}
            Eligibility requirements to become a member
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}