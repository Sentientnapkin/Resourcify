import {Text, View, SafeAreaView} from 'react-native';
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";
import {useNavigation} from "@react-navigation/native";
import {setLanguageAction} from "../redux/actions/setLanguageAction";
import { useDispatch } from "react-redux";

export default function LanguageSelectorScreen (){
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLanguage = (language) => {
    dispatch(setLanguageAction(language));
    navigation.goBack();
  }

  return (
      <>
        <View className={"bg-[#00cc81] justify-center items-center h-20 pt-5 border-b-2"}>
          <Text className={"text-3xl t.fontFiraSans"}>
            Resourcify
          </Text>
        </View>

        <SafeAreaView className={"flex-1 items-center justify-center bg-white"}>
          <View className={"absolute"}>
            <MenuProvider className={"bg-[#00cc81] px-6 pt-6 pb-16 rounded-lg"}>
              <Menu>
                <MenuTrigger>
                  <Text>
                    Choose A Language
                  </Text>
                </MenuTrigger>

                <MenuOptions>
                  <MenuOption onSelect={() => handleLanguage("English")}>
                    <Text>English</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleLanguage("Farsi")}>
                    <Text>Farsi</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleLanguage("Spanish")}>
                    <Text>Spanish</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => handleLanguage("Arabic")}>
                    <Text>Arabic</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </MenuProvider>
          </View>
        </SafeAreaView>
      </>
  );
}

