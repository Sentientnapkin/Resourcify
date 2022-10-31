import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from "react";
import json from '../data/fremontHousingData.json';
import HomeBit from "../components/HomeBit";
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";

export default function HousingScreen (){
  const data = json;

  return(
    <ScrollView className={"bg-gray-200"}>
      <SafeAreaView className={"flex-1"}>
        <SafeAreaView>
          <View className={"absolute top-0 right-0 z-50 items-start"}>
            <MenuProvider className={"flex-1 w-52 h-52"}>
              <Menu>
                <MenuTrigger>
                  <View className={"items-center justify-center mt-12"}>
                    <Text className={"text-3xl"}>
                      Filter
                    </Text>
                  </View>
                </MenuTrigger>

                <MenuOptions>
                  <ScrollView>
                    <MenuOption onSelect={() => {}}>
                      <Text className={"text-lg"}>Housing Price</Text>
                    </MenuOption>

                    <MenuOption onSelect={() => {}}>
                      <Text className={"text-lg"}>Only Elementary Schools</Text>
                    </MenuOption>

                    <MenuOption onSelect={() => {}}>
                      <Text className={"text-lg"}>Only Middle Schools</Text>
                    </MenuOption>

                    <MenuOption onSelect={() => {}}>
                      <Text className={"text-lg"}>Only High Schools</Text>
                    </MenuOption>
                  </ScrollView>
                </MenuOptions>
              </Menu>
            </MenuProvider>
          </View>


          <Image />
        </SafeAreaView>

        <View>
          <Text className={"text-3xl text-center"}>
            Individual Data
          </Text>
        </View>

        <View>
          <Text className={"text-base text-center"}>
            See more about which neighborhoods go to which schools here:
            <Text className={"text-blue-400"}>
              https://www.myschoollocation.com/fremontusd2/
            </Text>
          </Text>
        </View>

        {data.map((item) => {
          return (
              <HomeBit
                name={item.name}
                median_sale_price={item.median_sale_price}
                growing_rate={item.growing_rate}
                crime_rate={item.crime_rate}
                image_url={item.image_url}
              />
          )
        })}
      </SafeAreaView>
    </ScrollView>
  );
}
