import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
    const imagens = {
        "minhasHortas":require("../assets/minhasHortas.png"),
        "culturas":require("../assets/culturas.png"),
        "producao":require("../assets/producao.png"),
        "balanco":require("../assets/balanco.png")
    }
const Bloco = (props) => {
    const imagem = imagens[props.logo]
    return <TouchableOpacity style={styles.container}>
        <Image source={imagem}
            resizeMode="contain"
            style={styles.imagem} />
        <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        width: 156,
        height: 143,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 20,
        backgroundColor: "#ffffff",
        padding: 16
    },
    title: {
        fontSize: 16,
        fontFamily: 'verdana',
        color: '#424242'
    },
    imagem: {
        width: 127,
        height: 79
    }
})
export default Bloco;