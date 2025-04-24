import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CampoTexto = (props) => {
    const [text, onChangeText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={props.preencher}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 55,
        width: 290,
        margin: 12,
        borderWidth: 1,
        borderColor: "#8D6E63",
        paddingLeft: 20,
        borderRadius: 20,

    },
});


export default CampoTexto;
