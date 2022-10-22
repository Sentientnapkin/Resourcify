import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMV18PlusScreen6 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMV18PlusScreen5")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            Once you have passed the test, you can take the behind the wheel test.
            If you have no driving experience, it is recommended that you at least take a few driving lessons before the test.
          </Text>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://coastlineacademy.com')}>
            <Image
              source={{uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/heam9qpqmmsn61s1ntty'}}
              style={{width: '100%', height: 220}}
              resizeMode={"stretch"}
            />
          </TouchableOpacity>

          <Text className={"text-lg"}>
            Click above to schedule lessons with Coastline Academy, a driving school in the bay area,
            but also search "driving lessons bay area" on google and choose the best fit for you.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMV18PlusScreen7")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}