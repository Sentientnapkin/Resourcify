import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMV18PlusScreen2 (){
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMV18PlusScreen1")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <View className={"flex-row justify-around mb-6 items-center"}>
            <Text className={"text-lg"}>
              See Drivers Handbook Here
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/')}>
              <ArrowTopRightOnSquareIcon
                size={24}
                color={"#00cc81"}
              />
            </TouchableOpacity>
          </View>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.dmv.ca.gov/portal/handbook/california-driver-handbook/')}>
              <Image
                source={{uri:'https://s.driving-tests.org/img/manuals-v2/CA/ca-car.jpg'}}
                style={{width:'100%', height: 300}}
                resizeMode={"stretch"}
              />
            </TouchableOpacity>
      </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMV18PlusScreen3")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}