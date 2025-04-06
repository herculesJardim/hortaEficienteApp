import { View, Image, StyleSheet } from 'react-native';
const foto = require("../assets/fundoInicioLogin.png");
const Fundo = () => {
    return <View style={estilo.container}>
        <Image source={foto}
            resizeMode="contain"
            style={estilo.image} />
    </View>

}
const estilo = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width:861 ,
        height:573

    }

})
export default Fundo;