import { View, StyleSheet, Text, Alert } from "react-native";
import Botao from "../../componentes/Botao";
import { supabase } from "../../services/lib/supabase";
import { useAuth } from "../../contexts/AuthContext";
export default function Usuario(){
    const{setAuth}= useAuth();
    async function handleSingOut(){
        const {error} = await supabase.auth.signOut();
            setAuth(null);
        if(error){
            Alert.alert('Error','Erro ao sair da Conta')
            return;
        }
    }
    return(
        <View style={styles.container}>
            <View>
                <Text> Usuario</Text>
            </View>
            <View>
                <Botao text='Sair'color='verde' onPress={handleSingOut}/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})
