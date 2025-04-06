import { View, Text, StyleSheet} from "react-native";

const TextoInicio = () => {
    return <View style={estilo.container}>
        <Text style={estilo.titulo}>A melhor maneira de organizar suas hortas</Text>
        <Text style={estilo.subTitulo}>Organizaremos e dimensionaremos sua horta e sua produção.</Text>
    </View>
}
const estilo = StyleSheet.create({
    container: {
        flex: 0.2,
    },
    titulo:{
        fontSize:24,
        fontFamily:"Arial",
        textAlign:"center"
    },
    subTitulo:{
        fontSize:15,
        fontFamily:"Arial",
        textAlign:"center"
    }
})
export default TextoInicio;