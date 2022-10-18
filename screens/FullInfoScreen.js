import {Button, Modal, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function FullInfoScreen(props){
  const navigation = useNavigation();

  return(
      <SafeAreaView>
        <Text>
          Information
        </Text>
        <Text>
          <Button  title={"Back"} onPress = {() => navigation.goBack()} color = 'white'/>
        </Text>
      </SafeAreaView>
  );
}