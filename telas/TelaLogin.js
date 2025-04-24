import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Fundo from '../componentes/Fundo';
import Botao from '../componentes/Botao';
import CampoTexto from '../componentes/Campo';
const TelaLogin = () => {
    const LogoGoogle = require('../assets/iconeGoogle.png')
    return <View style={styles.container}>
        <Fundo />
        <View style={styles.formulario}>
            <View>
                <Text style={styles.titulo}>Bem-Vindo!</Text>
                <Text style={styles.subTitulo}>Insira sua credênciais para entrar no sistema</Text>
            </View>
            <CampoTexto preencher="Email" />
            <CampoTexto preencher="Senha" />
            <Botao color="marrom" text="Entrar" />
            <TouchableOpacity
                style={styles.botaoGoogle}
                onPress={() => console.log("Botão ")}>
                <Image source={LogoGoogle}
                    resizeMode="contain"
                    style={styles.logoGoogle} />
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    formulario: {
        padding: 50,
        backgroundColor: '#FAF4F0',
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {

        fontSize: 24,
        fontFamily: "Arial",
        fontWeight: "bold",

    },
    subTitulo: {
        paddingTop: 10,
        fontSize: 15,
        fontFamily: "Arial",
        color: "#757575"
    },
    botaoGoogle: {
        alignItems:'center',
        justifyContent:"center",
        borderRadius: 50,
        width: 55,
        height: 55,
        backgroundColor:'#ffff',
        elevation: 4, // Sombra no Android
        shadowColor: '#000000', // Sombra no iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    logoGoogle:{
        width: 33.32,
        height: 34,

    }

});

export default TelaLogin;