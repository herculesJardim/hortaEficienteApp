import { View, Text, StyleSheet } from "react-native";

const BarraSuperior = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
        paddingTop:25,
        paddingLeft:14,
        paddingRight:14,
        paddingBottom:10,
        

    },
    title: {

        fontFamily: 'Arial',
        fontSize: 28,
        color: '#8D6E63',
        alignItems: 'center'
    }
})
export default BarraSuperior;