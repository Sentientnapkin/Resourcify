import {SafeAreaView, Image} from 'react-native';
import React from "react";

export default function NeighborhoodsScreen (){
  return(
    <SafeAreaView className={"justify-center"}>
      <Image
        source={{uri: 'https://cdn.discordapp.com/attachments/762136512170295336/1036875603837734912/Fremont_Map.png'}}
        resizeMode={"contain"}
        style={{height: 400}}
      />
    </SafeAreaView>
  );
}
