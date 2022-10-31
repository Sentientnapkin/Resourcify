import {View, Text, Image} from 'react-native';
import React from 'react';

export default function HomeBit({name, median_sale_price, growing_rate, crime_rate, image_url}){
  return(
    <View className={"p-2 bg-white rounded-md mt-0.5 mx-0.5 flex-row"}>
      <View className={"basis-7/12"}>
          <Text className={"text-2xl"}>
            {name}
          </Text>
          <Text className={"text-base"}>
            Average House: ${median_sale_price}
          </Text>
          <Text className={"text-base"}>
           Growing Rate: {growing_rate}
          </Text>
          <Text className={"text-base"}>
            {crime_rate} Crimes per 100,000 people
          </Text>
      </View>
      <View className={"items-center justify-center basis-5/12"}>
        <Image
          className={""}
          source={{uri: image_url}}
          style={{width: 120, height: 120}}
          resize={"contain"}
        />
      </View>
    </View>
  );
}