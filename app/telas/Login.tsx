import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    TextInput,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import Fundo from '../../componentes/Fundo';
import Botao from '../../componentes/Botao';
import { useState } from 'react';
import { supabase } from '../../services/lib/supabase';
import { Link } from 'expo-router';
const Login = () => {
    const LogoGoogle = require('../../assets/iconeGoogle.png')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function entrada() {
        setLoading(true)
        console.log(email, password)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Fundo />
            </View>

            <View style={styles.formulario}>

                <Text style={styles.titulo}>Bem-Vindo!</Text>
                <Text style={styles.subTitulo}>Insira sua credênciais para entrar no sistema</Text>

                <TextInput
                    placeholder='Digite seu email ...'
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder='Digite sua senha ...'
                    style={styles.input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <Botao color="marrom" text="Entrar" onPress={entrada} />
                <TouchableOpacity
                    style={styles.botaoGoogle}
                    onPress={() => console.log("Botão ")}>
                    <Image source={LogoGoogle}
                        resizeMode="contain"
                        style={styles.logoGoogle} />
                </TouchableOpacity>
                <Link href={'telas/CadastroUsuario'} style={styles.link}>
                    <Text>Não tenho Cadastro</Text>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1
    },
    formulario: {
        flex: 1,
        backgroundColor: '#FAF4F0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 34,
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom:34
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
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 50,
        width: 55,
        height: 55,
        backgroundColor: '#ffff',
        elevation: 4, // Sombra no Android
        shadowColor: '#000000', // Sombra no iOS
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    input: {
        height: 55,
        width: 290,
        margin: 12,
        borderWidth: 1,
        borderColor: "#8D6E63",
        paddingLeft: 20,
        borderRadius: 20,

    },
    logoGoogle: {
        width: 33.32,
        height: 34,

    },
    link:{
        marginTop:8,
        textAlign:'center',
        textDecorationLine:'underline',
        marginBottom:30
    }

});

export default Login;