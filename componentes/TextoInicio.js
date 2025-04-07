import { View, Text, StyleSheet} from "react-native";

const TextoInicio = () => {
    return <View style={estilo.container}>
        <Text style={estilo.titulo}>A melhor maneira de organizar suas hortas</Text>
        <Text style={estilo.subTitulo}>Organizaremos e dimensionaremos sua horta e sua produção.</Text>
    </View>
}
const estilo = StyleSheet.create({
    container: {
        flex: 0.35,
        borderRadius:50,
        backgroundColor:"#FFFF",
        padding:20,
        

    },
    titulo:{
        top:40,
        fontSize:24,
        fontFamily:"Arial",
        textAlign:"center",
        
    },
    subTitulo:{
        top:20,
        padding:45,
        fontSize:15,
        fontFamily:"Arial",
        textAlign:"center",
        color:"#757575"
    }
})
export default TextoInicio;