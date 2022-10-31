import {View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import React from "react";
import {useNavigation} from "@react-navigation/native";

export default function FinancialLiteracyScreen (){
  const navigation = useNavigation();

  return (
    <SafeAreaView className={"flex-1"}>
      <ScrollView>
        <TouchableOpacity onPress={() => {
          navigation.navigate("BudgetingScreen1");
        }}>
          <View className={"px-5 py-10 justify-center border-y-2 border-gray"}>
            <Text className={"text-2xl"}>
              Budgeting
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("BankOrCreditScreen1");
        }}>
          <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
            <Text className={"text-2xl"}>
              Choosing a Bank or Credit Union
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Taxes");
        }}>
          <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
            <Text className={"text-2xl"}>
              Taxes
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Loans");
        }}>
          <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
            <Text className={"text-2xl"}>
              Loans
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Fraud/Scam");
        }}>
          <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
            <Text className={"text-2xl"}>
              Fraud/Scams
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Credit vs Debit");
        }}>
          <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
            <Text className={"text-2xl"}>
              Credit vs Debit Cards
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("CreditReportsandScoresScreen");
        }}>
          <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
            <Text className={"text-2xl"}>
              Credit Reports and Scores
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Identity Theft");
        }}>
          <View className={"px-5 py-10 justify-center border-b-2 border-gray"}>
            <Text className={"text-2xl"}>
              Identity Theft
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
