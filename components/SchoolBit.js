import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';
import React from 'react';
import {NoSymbolIcon} from "react-native-heroicons/outline";

export default function SchoolBit({name, rating, url, address, phoneNum, rating_url, image}, key){
  return(
    <View className={"p-2 bg-white rounded-md mt-0.5 mx-0.5"}>
      <View className={"flex-row justify-between items-center"}>
        <View className={""}>
          <Text className={"text-lg"}>
            {name}
          </Text>
          <Text className={"text-lg"}>
            {address}
          </Text>
        </View>
        <View className={"bg-[#00cc81] border-2 rounded-md flex w-16 h-12 justify-center items-center"}>
          {rating==="unrated" ? <NoSymbolIcon size={28} color={"black"}/> : <Text className={"text-lg"}>{rating}/10</Text>}
        </View>
        <Image
          source={{uri: image}}
          style={{width: 100, height: 70}}
          resizeMode={"contain"}
        />
      </View>
      <View className={"flex-row"}>
        <View>
          <View className={""}>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Text className={"text-base"}>
                Website: {" "}
                <Text className={"text-blue-500"}>
                  {url}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
          <Text className={"text-base"}>
            Phone Number: (510) {phoneNum}
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL(rating_url)}>
            <Text className={"text-base"}>
              See more: {" "}
              <Text className={"text-blue-500"}>
                {rating_url}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}