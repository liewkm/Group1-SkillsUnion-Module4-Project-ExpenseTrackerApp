import React, { useState } from "react";
import PickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

export default function App () {
    const [ language, setLanguage ] = useState("");
    return (
        <View style={styles.container}>
            <Text>
                {language ?
                  `My favourite language is ${language}` :
                    "Please select a language"
                }
            </Text>

            {/* PickerSelect */}

            <PickerSelect
                onValueChange={(language) => setLanguage(language)}
                items={[
                    { label: "JavaScript", value: "JavaScript" },
                    { label: "TypeScript", value: "TypeScript" },
                    { label: "Python", value: "Python" },
                    { label: "Java", value: "Java" },
                    { label: "C++", value: "C++" },
                    { label: "C", value: "C" },
                ]}
              style={pickerSelectStyles}
            />

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});