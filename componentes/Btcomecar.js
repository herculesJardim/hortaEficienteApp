import { View, StyleSheet, Button } from 'react-native';
const Btcomecar = () => {
    return <View style={estilo.container}>
        <Button title='Começar'
        style={estilo.botao} />
    </View>
}

const estilo = StyleSheet.create({
    container: {
        flex: 0.1,
    },
    botao: {
        margin:20,
       // width: 252,
        height: 64

    }
})

export default Btcomecar;