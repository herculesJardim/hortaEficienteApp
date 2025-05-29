import { View, StyleSheet, Text } from "react-native";
import BarraSuperior from "../componentes/BarraSuperior";
import Horta from "../componentes/Horta";
import { FlatList } from "react-native";
const ListaHortas = [
    {
        id: 1,
        nome: "Horta 1",
        culturas: "Alface, cebola, quentro",
        area: 1000
    },
    {
        id: 2,
        nome: "Horta 2",
        culturas: "Couve, cebola, quentro",
        area: 500
    },
    {
        id: 3,
        nome: "Horta 3",
        culturas: "Alface, cebola, abóbora",
        area: 930
    },
    {
        id: 4,
        nome: "Horta 4",
        culturas: "Alface, cebola, quentro",
        area: 90
    },
    {
        id: 5,
        nome: "Horta 5",
        culturas: "Pimentão, cebola, Rúcula",
        area: 1300
    },
    {
        id: 6,
        nome: "Horta 6",
        culturas: "Alface, cenoura, quentro",
        area: 300
    },
    {
        id: 7,
        nome: "Horta 7",
        culturas: "Alho, cebola, tomate",
        area: 100
    }
    ,

]
const Hortas = () => {
    function rederItem({item}){
        return <Horta {...item}/>;
    }
    return <View style={styles.container}>
        <View style={styles.barraTopo}>
            <BarraSuperior title="Hortas" />
        </View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={ListaHortas}
                renderItem={rederItem}
                contentContainerStyle={styles.listBackground}
            />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    barraTopo: {
        justifyContent: 'flex-start'
    },
    listBackground: {
        width: 393,
        height: 776,
        borderRadius: 20,
        backgroundColor: '#FAF4F0',
        justifyContent: "flex-start",
        alignItems: "center",
        gap:10,
        paddingTop: 36
    }
});
export default Hortas;