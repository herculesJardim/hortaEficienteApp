import { View, StyleSheet, Text } from "react-native";
export default function Usuario(){
    return(
        <View style={styles.container}>
            <Text> Usuario</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})
