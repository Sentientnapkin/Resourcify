import {useState} from 'react';
import {Stylesheet, Text, View, Modal, StyleSheet} from 'react-native';
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";

export default function LanguageCheck (props){
    const [language, setLanguage] = useState(props.language);

    return (
        <Modal style={styles.container} visible={props.visible} animationType={"slide"}>
            <MenuProvider>
                <Menu>
                    <MenuTrigger>
                        <Text>
                            Click Me
                        </Text>
                    </MenuTrigger>

                    <MenuOptions>
                        <MenuOption value={"Option 1"} onSelect={value => alert(`You Clicked: ${value}`)}>
                            <Text>Option 1</Text>
                        </MenuOption>

                        <MenuOption value={"Option 2"} onSelect={value => alert(`You Clicked: ${value}`)}>
                            <Text>Option 2</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </MenuProvider>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc60e',
    }
});
