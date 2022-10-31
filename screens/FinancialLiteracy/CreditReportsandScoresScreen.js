import {View, Text, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React, {useState, useRef} from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import {Icon} from "react-native-elements";

export default function CreditReportsandScoresScreen (){
  return (
    <View className={"flex-1 justify-center"}>
      <SafeAreaView className={"flex-row items-center"}>
        <View className={"flex-1 bg-white p-3 rounded-lg"}>
          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=XYWLmHhRXVU')}>
            <Text className={"text-lg"}>
              A Guide to Credit Cards:
            </Text>
          </TouchableOpacity>

          <YoutubePlayer
          height={200}
          videoId={'XYWLmHhRXVU'}
          />

          <TouchableOpacity className={"justify-center"} onPress={() => Linking.openURL('https://www.experian.com/blogs/ask-experian/how-to-improve-credit-on-low-income/')}>
            <Text className={"text-blue-500 text-lg"}>
              {"\n"} How to Improve Credit on a Low Income
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}