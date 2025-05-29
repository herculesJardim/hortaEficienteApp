import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

const Horta = ({id,nome,culturas,area}) => {
    const imagem = require("../assets/horta.png")
    return <TouchableOpacity style={styles.container}>
        <View>
            <Image source={imagem}
                resizeMode="contain"
                style={styles.imagem} />
        </View>
        <View>
            <Text style={styles.title}>{nome}</Text>
            <Text style={styles.subtitle}>{culturas}</Text>
            <Text style={styles.area}>{area} m²</Text>
        </View>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 5,
        width: 329,
        height: 86,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: "row",
        gap: 10,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'
    }
    ,
    imagem: {
        width: 127,
        height: 86,

    },
    title: {
        paddingTop:11,
        fontSize: 16,
        color:'#424242'
    },
    subtitle:{
        color: "#757575",
        fontSize: 12
    },
    area:{
        paddingTop:10,
        fontSize: 13,
        color:"#757575"

    }

})
export default Horta;