import {View, Text, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

export default function Topic (props){
    const navigation = useNavigation();
    const [showFull, setShowFull] = useState(false);
    const screenToNavigateTo = props.screenToNavigate;

    function setShowFullVisible(){
        setShowFull(true);
    }

    function setShowFullInvisible(){
        setShowFull(false);
    }

    return(
            <TouchableOpacity onPress={() => navigation.navigate(screenToNavigateTo)}>
                <View className={"border-2 h-40 w-44 my-3 rounded-md"}>
                    <View className={"basis-1/4 bg-[#00cc81] justify-center items-center"}>
                        <Text className={"text-lg"}>
                            {props.title}
                        </Text>
                    </View>
                    <View className={"basis-3/4 p-0.5"}>
                        <Text>
                            {props.description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
    );
}