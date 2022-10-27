import {Image, Linking, Modal, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {XMarkIcon} from "react-native-heroicons/mini";
import React from "react";

export default function LocationPopUp({title, description, address, website, imageURL, phoneNum, visible, setVisible}) {
  function modalVisibleHandler() {
    setVisible(false);
  }

  return(
    <Modal visible={visible}
           animationType={"slide"}
           transparent={true}
           onRequestClose={() => modalVisibleHandler()}>
      <SafeAreaView className={"flex-1 justify-center"}>
        <SafeAreaView className={"absolute top-0 right-0"}>
          <XMarkIcon size={48} color={"black"} onPress={() => modalVisibleHandler()}/>
        </SafeAreaView>
        <SafeAreaView className={"flex-row items-center"}>
          <View className={"flex-1 bg-white p-3 rounded-lg"}>
            <Text className={"text-xl"}>
              {title} {"\n"}
            </Text>
            <Text className={"text-lg"}>
              {description} {"\n\n"}
              Address: {address} {"\n"}
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL({website}+"")}>
              <Text className={"text-blue-500 text-lg"}>
                <Text className={"text-black"}>
                  Website: {" "}
                </Text>
                {website}
              </Text>
            </TouchableOpacity>
            <Text>
              Contact: {phoneNum}
            </Text>
            <View className={"items-center"}>
              <Image
                source={{uri: imageURL}}
                style={{height:200,width:200}} resizeMode={"stretch"}
              />
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </Modal>
  );
}