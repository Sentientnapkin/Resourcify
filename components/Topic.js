import {View, Text, TouchableOpacity, Image} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function Topic (props){
    const navigation = useNavigation();
    const screenToNavigateTo = props.screenToNavigate;

    return(
            <TouchableOpacity onPress={() => navigation.navigate(screenToNavigateTo)}>
                <View className={"border-2 h-48 rounded-md m-3"}>
                    <View className={"basis-1/4 bg-[#00cc81] justify-center items-center"}>
                        <Text className={"text-2xl"}>
                            {props.title}
                        </Text>
                    </View>
                    <View className={"flex-row"}>
                        <View className={"basis-7/12"}>
                            <Text className={"flex-1 text-base p-2"}>
                                {props.description}
                            </Text>
                        </View>
                        <View className={"items-center basis-5/12 p-2"}>
                            <Image
                              className={""}
                              source={{uri: props.image}}
                              style={{width: 120, height: 120}}
                              resizeMode={"contain"}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    );
}