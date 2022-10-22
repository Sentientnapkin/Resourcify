import {View, Text, SafeAreaView, TouchableOpacity, Linking, Image} from 'react-native';
import React from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "react-native-heroicons/mini";
import {useNavigation} from "@react-navigation/native";

export default function DMVU18Screen9 () {
  const navigation = useNavigation();

  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVU18Screen8")}>
          <ChevronLeftIcon color={"black"} size={48}/>
        </TouchableOpacity>

        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <Text className={"text-lg"}>
            Once you have passed the test, your next test will be in 6 months to get your provisional license.
            Before that, you need to take 3 drive lessons. You can drive with a parent before your first lesson, and it is recommended to have some practice before then.
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
            but before you schedule anything, do your own research and
            search "driving lessons bay area" on google and choose the best fit for you.
          </Text>
        </View>

        <TouchableOpacity className={"justify-center"} onPress={() => navigation.navigate("DMVU18Screen10")}>
          <ChevronRightIcon size={48} color={"black"}/>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}