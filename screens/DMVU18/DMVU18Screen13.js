import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from "react";
import {ChevronLeftIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVU18Screen13 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVU18Screen12")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            People with a provisional license can drive a family member who is under 20 alone or from 11pm to 5am if: {"\n"}
          </Text>
          <Text className={"text-md"}>
            (A) Medical necessity of the licensee. The driver needs to have with him a signed statement from a physician familiar with the condition, containing a diagnosis and probable date when sufficient recovery will have been made to terminate the necessity. {"\n"}

            (B) To attend school or school-authorized activities. For this, the driver will need to have with her a signed statement from a school official containing a date the schooling or school-authorized activity will have been completed. {"\n"}

            (C) To go to work. The driver will need to carry a signed statement from the employer, verifying employment and containing a probable date that the employment will have been completed. {"\n"}

            (D) To drive himself or an immediate family to anywhere else. In this case, the driver needs to have a signed statement from a parent or legal guardian verifying the reason and containing a probable date that the necessity will have ceased. {"\n"}
          </Text>
          <Text className={"text-lg"}>
            Once your 12 months are over you can drive whoever and whenever you want to.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}