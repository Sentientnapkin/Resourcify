import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';
import React from 'react';
import {NoSymbolIcon} from "react-native-heroicons/outline";

export default function HomeBit({name, median_sale_price, growing_rate, crime_rate}){
  return(
    <View className={"p-2 bg-white rounded-md mt-0.5 mx-0.5"}>
      <View className={"flex-row justify-between items-center"}>
        <View className={""}>
          <Text className={"text-2xl"}>
            {name}
          </Text>
          <Text className={"text-lg"}>
            Average House: ${median_sale_price}
          </Text>
        </View>
        <Image />
      </View>
      <View className={"flex-row"}>
        <View>
          <Text className={"text-lg"}>
           Growing Rate: {growing_rate}
          </Text>
          <Text className={"text-lg"}>
            {crime_rate} Crimes per 100,000 people
          </Text>
        </View>
      </View>
    </View>
  );
}