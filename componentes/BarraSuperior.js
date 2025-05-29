import { View, Text, StyleSheet} from "react-native";

const BarraSuperior = (props)=>{
    return <View style={styles.container}>
        
        <Text style={styles.title}>{props.title}</Text>
    </View>
}
const styles = StyleSheet.create({
    container:{
        alignItens:"center",

    },
    title:{
        fontFamily: 'Arial',
        fontSize:28,
        color:'#8D6E63',
    }
})
export default BarraSuperior;