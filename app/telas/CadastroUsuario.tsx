import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    TextInput,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import {useRouter } from 'expo-router';
import Fundo from '../../componentes/Fundo';
import Botao from '../../componentes/Botao';
import { useState } from 'react';
import { supabase } from '../../services/lib/supabase';
import BotaoVoltar from '../../componentes/BotaoVoltar';
const CadastroUsuario = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    function handleSignUp() {
        setLoading(true)
        console.log(nome,email,telefone,password)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Fundo />
                    <BotaoVoltar />
                </View>


                <View style={styles.formulario}>
                    <ScrollView style={{ flex: 1 }}>
                        <Text style={styles.titulo}>Criar Conta</Text>
                        <Text style={styles.subTitulo}>Insira seu dados pessoais</Text>

                        <TextInput
                            placeholder='Digite seu nome ...'
                            style={styles.input}
                            value={nome}
                            onChangeText={setNome}
                        />
                        <TextInput
                            placeholder='Digite seu email ...'
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            placeholder='Digite seu Telefone ...'
                            style={styles.input}
                            value={telefone}
                            onChangeText={setTelefone}
                        />
                        <TextInput
                            placeholder='Digite sua Senha ...'
                            style={styles.input}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                        />

                        <Botao color="verde" text="Cadastrar" onPress={handleSignUp} />
                    </ScrollView>
                </View>

            </View>

        </SafeAreaView>
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
        paddingBottom: 60
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
        borderRadius: 6,

    },
    link: {
        marginTop: 16,
        textAlign: 'center'
    },
    logoGoogle: {
        width: 33.32,
        height: 34,

    }

});

export default CadastroUsuario;