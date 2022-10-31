import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import json from '../data/fremontSchoolsData.json';
import SchoolBit from "../components/SchoolBit";
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger, renderers} from "react-native-popup-menu";

export default function SchoolScreen(){
  const data = json.school;
  const {SlideInMenu} = renderers;
  const [allSchools, setAllSchools] = React.useState(true);
  const [elementarySchools, setElementarySchools] = React.useState(false);
  const [middleSchools, setMiddleSchools] = React.useState(false);
  const [highSchools, setHighSchools] = React.useState(false);

  const handleAllSchools = () => {
    setAllSchools(true);
    setElementarySchools(false);
    setMiddleSchools(false);
    setHighSchools(false);
  }

  const handleElementarySchools = () => {
    setAllSchools(false);
    setElementarySchools(true);
    setMiddleSchools(false);
    setHighSchools(false);
  }

  const handleMiddleSchools = () => {
    setAllSchools(false);
    setElementarySchools(false);
    setMiddleSchools(true);
    setHighSchools(false);
  }

  const handleHighSchools = () => {
    setAllSchools(false);
    setElementarySchools(false);
    setMiddleSchools(false);
    setHighSchools(true);
  }

  return (
    <ScrollView>
        <View className={"flex-row items-start bg-white z-50 h-36"}>
          <MenuProvider className={"flex-1"}>
            <Menu renderer={SlideInMenu}>
              <MenuTrigger>
                <View className={"items-center justify-center mt-12"}>
                  <Text className={"text-3xl"}>
                    Filter
                  </Text>
                </View>
              </MenuTrigger>

              <MenuOptions>
                <ScrollView>
                  <MenuOption onSelect={() => handleAllSchools()}>
                    <Text className={"text-lg"}>All Schools</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleElementarySchools()}>
                    <Text className={"text-lg"}>Only Elementary Schools</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleMiddleSchools()}>
                    <Text className={"text-lg"}>Only Middle Schools</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleHighSchools()}>
                    <Text className={"text-lg"}>Only High Schools</Text>
                  </MenuOption>
                </ScrollView>
              </MenuOptions>
            </Menu>
          </MenuProvider>
        </View>

      <SafeAreaView className={"bg-gray-400 z-0"}>
        {data.map((item) => {
          if(allSchools){
            return (
              <SchoolBit
                name={item.name}
                rating={item.rating}
                url={item.url}
                address={item.address}
                phoneNum={item.phoneNum}
                rating_url={item.rating_url}
                image={item.image}
              />
            )
        } else if (elementarySchools && item.name.includes("Elementary")){
            return (
              <SchoolBit
                name={item.name}
                rating={item.rating}
                url={item.url}
                address={item.address}
                phoneNum={item.phoneNum}
                rating_url={item.rating_url}
                image={item.image}
              />
            )
        } else if (middleSchools && (item.name.includes("Middle")||item.name.includes("Junior"))){
            return (
              <SchoolBit
                name={item.name}
                rating={item.rating}
                url={item.url}
                address={item.address}
                phoneNum={item.phoneNum}
                rating_url={item.rating_url}
                image={item.image}
              />
            )
        } else if (highSchools && item.name.includes("High") && !item.name.includes("Junior")){
            return (
              <SchoolBit
                name={item.name}
                rating={item.rating}
                url={item.url}
                address={item.address}
                phoneNum={item.phoneNum}
                rating_url={item.rating_url}
                image={item.image}
              />
            )
        }
        })}
      </SafeAreaView>
    </ScrollView>
  );
}