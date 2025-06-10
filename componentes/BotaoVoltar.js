import { useRouter } from "expo-router"
import { Pressable, StyleSheet} from "react-native"
import{Ionicons} from '@expo/vector-icons'
const BotaoVoltar=()=>{
    const router = useRouter();
    return(
        <Pressable
        style={styles.container}
        onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={24} color={'#ffff'}/>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(255,255,255,0.55)',
        alignSelf:'flex-start',
        padding: 8,
        borderRadius:8,

    }
})
export default BotaoVoltar;