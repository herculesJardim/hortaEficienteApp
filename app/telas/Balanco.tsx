import { View, StyleSheet, Text } from "react-native";
export default function Balaco(){
    return(
        <View style={styles.container}>
            <Text> Balanco</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})