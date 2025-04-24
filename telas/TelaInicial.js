import { StyleSheet, View, Text } from 'react-native';
import Fundo from '../componentes/Fundo';
import Botao from '../componentes/Botao';

const TelaInicial = () => {
  return <View style={styles.container}>
    <Fundo />
    <View style={styles.formulario}>
      <View>
        <Text style={styles.titulo}>A melhor maneira de organizar suas hortas</Text>
        <Text style={styles.subTitulo}>Organizaremos e dimensionaremos sua horta e sua produção.</Text>
      </View>
      <Botao color="marrom" text="Começar" />
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formulario: {
    padding: 50,
    backgroundColor: '#FAF4F0',
    flex: 0.4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    paddingTop:40,
    fontSize: 24,
    fontFamily: "Arial",
    textAlign: "center",
  },
  subTitulo: {
    paddingTop: 20,
    fontSize: 15,
    fontFamily: "Arial",
    textAlign: "center",
    color: "#757575"
  }

});
export default TelaInicial;
