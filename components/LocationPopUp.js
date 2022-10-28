import {Image, Linking, Modal, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {XMarkIcon} from "react-native-heroicons/solid";
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
      <SafeAreaView className={"flex-1 justify-end"}>
        <SafeAreaView className={"items-end mb-4"}>
        </SafeAreaView>
        <SafeAreaView className={"flex-row items-center"}>
          <View className={"flex-1 bg-white p-3 rounded-lg"}>
            <View className={"flex-row"}>
              <View className={"flex-1"}>
                <Text className={"text-2xl"}>
                  {title} {"\n"}
                </Text>
              </View>
              <TouchableOpacity onPress={() => modalVisibleHandler()}>
                <XMarkIcon size={48} color={"black"}/>
              </TouchableOpacity>
            </View>
            <Text className={"text-lg"}>
              {description} {"\n\n"}
              Address: {address} {"\n"}
            </Text>
            <TouchableOpacity onPress={() =>
              Linking.openURL({website}+"")
                .then(() => {})
                .catch(()=>{})
            }>
              <Text className={"text-blue-500 text-lg"}>
                <Text className={"text-black"}>
                  Website: {" "}
                </Text>
                {website} {"\n"}
              </Text>
            </TouchableOpacity>
            <Text className={"text-lg"}>
              Phone Number: {phoneNum}
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