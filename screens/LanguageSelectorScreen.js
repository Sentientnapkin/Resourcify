import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";
import {useNavigation} from "@react-navigation/native";
import {setLanguageAction} from "../redux/actions/setLanguageAction";
import { useDispatch } from "react-redux";
import {Cog6ToothIcon} from "react-native-heroicons/mini";

export default function LanguageSelectorScreen (){
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLanguage = (language) => {
    dispatch(setLanguageAction(language));
    navigation.goBack();
  }

  return (
      <>
        <View className={"bg-[#00cc81] justify-center items-center h-28 pt-5 border-b-2 flex-row"}>
          <View className={"mt-3"}>
            <Text className={"text-3xl"}>
              Resourcify
            </Text>
          </View>
        </View>

        <SafeAreaView className={"flex-1 items-center justify-center bg-white"}>
          <View className={"absolute"}>
            <MenuProvider className={"bg-[#00cc81] px-8 pt-8 pb-28 rounded-lg"}>
              <Menu>
                <MenuTrigger>
                  <Text className={"text-lg"}>
                    Choose A Language
                  </Text>
                </MenuTrigger>

                <MenuOptions>
                  <MenuOption onSelect={() => handleLanguage("English")}>
                    <Text className={"text-lg"}>English</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleLanguage("Farsi")}>
                    <Text className={"text-lg"}>Farsi</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleLanguage("Spanish")}>
                    <Text className={"text-lg"}>Spanish</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleLanguage("Arabic")}>
                    <Text className={"text-lg"}>Arabic</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </MenuProvider>
          </View>
        </SafeAreaView>
      </>
  );
}

