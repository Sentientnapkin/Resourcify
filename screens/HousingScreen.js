import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from "react";
import json from '../data/fremontHousingData.json';
import HomeBit from "../components/HomeBit";

export default function HousingScreen (){
  const data = json;

  return(
    <ScrollView>
      <SafeAreaView className={"flex-1"}>
        <View>
          <Text className={"text-3xl text-center mt-12"}>
            Individual Data
          </Text>
        </View>

        {data.map((item) => {
          return (
              <HomeBit
                name={item.name}
                median_sale_price={item.median_sale_price}
                growing_rate={item.growing_rate}
                crime_rate={item.crime_rate}
              />
          )
        })}
      </SafeAreaView>
    </ScrollView>
  );
}
