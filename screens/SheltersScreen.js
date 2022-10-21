import {View, Text, SafeAreaView, Modal, Linking, TouchableOpacity, Image} from 'react-native';
import React from "react";
import MapView from "react-native-maps";
import {Marker} from "react-native-maps";
import {XMarkIcon} from "react-native-heroicons/mini";

export default function SheltersScreen (){
  const [isSAVEModalVisible, setSAVEModalVisible] = React.useState(false);
  const [isAdobeModalVisible, setAdobeModalVisible] = React.useState(false);

  return(
    <>
      <Modal visible={isSAVEModalVisible}
             animationType={"slide"}
              transparent={true}
              onRequestClose={() => setSAVEModalVisible(false)}>
        <View className={"flex-1 justify-center"}>
          <View className={"absolute top-24 right-0"}>
            <XMarkIcon size={48} color={"black"} onPress={() => setSAVEModalVisible(false)}/>
          </View>
          <SafeAreaView className={"flex-row items-center"}>
            <View className={"flex-1 bg-white p-3 rounded-lg"}>
              <Text className={"text-xl"}>
                Safe Alternatives To Violent Environments {"\n"}
              </Text>
              <Text className={"text-lg"}>
                SAVE is a non-profit organization that provides shelter and support to homeless youth in the San Francisco Bay Area.
                They have a shelter in San Jose, and they also have a drop-in center in San Jose. {"\n\n"}
                Address: 1900 Mowry Ave #201, Fremont, CA 94538 {"\n"}
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://save-dv.org')}>
                <Text className={"text-blue-500 text-lg"}>
                  <Text className={"text-black"}>
                    Website: {" "}
                  </Text>
                  https://save-dv.org
                </Text>
              </TouchableOpacity>
              <View className={"items-center"}>
                <Image
                  source={{uri:'data:image/png;base64,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'}}
                  style={{height:200,width:200}} resizeMode={"stretch"}
                />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Modal>

      <Modal visible={isAdobeModalVisible}
             animationType={"slide"}
             transparent={true}
             onRequestClose={() => setAdobeModalVisible(false)}>
        <View className={"flex-1 justify-center"}>
          <View className={"absolute top-24 right-0"}>
            <XMarkIcon size={48} color={"black"} onPress={() => setAdobeModalVisible(false)}/>
          </View>
          <SafeAreaView className={"flex-row items-center"}>
            <View className={"flex-1 bg-white p-3 rounded-lg"}>
              <Text className={"text-xl"}>
                ABODE SERVICES {"\n"}
              </Text>
              <Text className={"text-lg"}>
                Abode Services' mission is to end homelessness by assisting low-income,
                un-housed people, including those with special needs, to secure stable,
                supportive housing; and to be advocates for the removal of the causes of homelessness. {"\n\n"}
                Address: 588 Brown Rd, Fremont, CA 94539 {"\n"}
              </Text>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.abodeservices.org')}>
                <Text className={"text-blue-500 text-lg"}>
                  <Text className={"text-black"}>
                    Website: {" "}
                  </Text>
                  https://www.abodeservices.org
                </Text>
              </TouchableOpacity>
              <View className={"items-center"}>
                <Image
                  source={{uri:'data:image/jpeg;base64,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'}}
                  style={{height:200,width:200}} resizeMode={"stretch"}
                />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Modal>

      <View className={"flex-1"}>
        <MapView
          initialRegion={{
            latitude: 37.532044,
            longitude: -121.980236,
            latitudeDelta: 0.18,
            longitudeDelta: 0.18,
          }}
          className={"flex-1 z-0"}
          mapType={"mutedStandard"}
        >
          <Marker
            onPress={() => setSAVEModalVisible(true)}
            coordinate={{latitude: 37.558600, longitude: -121.979766}}
          />

          <Marker
            onPress={() => setAdobeModalVisible(true)}
            coordinate={{latitude: 37.494671, longitude: -121.927999}}
          />
        </MapView>
      </View>
    </>
  );
}
