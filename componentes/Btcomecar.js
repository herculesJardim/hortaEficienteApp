import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
const Btcomecar = () => {
    return <View style={estilo.container}>
        <TouchableOpacity
            style={estilo.botao}
            onPress={() => console.log("Botão pressionado")}>
            <Text style={estilo.texto}>Começar</Text>
        </TouchableOpacity>
    </View>
}

const estilo = StyleSheet.create({
    container: {

        alignItems: "center"
    },
    botao: {
        margin: 20,
        backgroundColor:"#8D6E63",
        padding:5,
        borderRadius: 20,
        width: 252,
        height: 64,
        alignItems: 'center',
        elevation: 4, // Sombra no Android
        shadowColor: '#000', // Sombra no iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    texto: {
        fontSize: 32,
        color: "#ffff",
    }
})

export default Btcomecar;