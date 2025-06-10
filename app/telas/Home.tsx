import { View, StyleSheet, Text } from "react-native";
import BarraSuperior from "../../componentes/BarraSuperior";
import Bloco from "../../componentes/Bloco";

const Home = () => {
    return <View style={styles.container}>
        <View style={styles.barraTopo}>
            <BarraSuperior title="Rancho Fundo" />
        </View>
        <View style={styles.gerenciarHortas}>
            <Text style={styles.titulo}>Gerencie suas Hortas</Text>
            <View style={styles.blocos}>
                <Bloco title="Minhas Hortas" logo="minhasHortas"/>
                <Bloco title="Culturas" logo="culturas" />
                <Bloco title="Produção" logo="producao"/>
                <Bloco title="Balanço" logo="balanco"/>
            </View>
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap:100


    },
    barraTopo: {
        justifyContent: 'flex-start'
    },
    blocos: {
        flexDirection:"row",
        gap: 10,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // 2 colunas de mesma largura

    }
    ,
    gerenciarHortas: {
        width: 393,
        height: 597,
        borderRadius: 20,
        backgroundColor: '#FAF4F0',
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 36,
        paddingTop: 36

    }
    ,
    titulo: {
        color: '#424242',
        fontSize: 28,
        fontFamily: "verdana"
    }

})
export default Home;