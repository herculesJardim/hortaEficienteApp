import { StyleSheet, View, Text } from 'react-native';
import Fundo from '../componentes/Fundo';
import Botao from '../componentes/Botao';
import { useRouter } from 'expo-router';
const Index = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Fundo />
      </View>
      <View style={styles.formulario}>

          <Text style={styles.titulo}>A melhor maneira de organizar suas hortas</Text>
          <Text style={styles.subTitulo}>Organizaremos e dimensionaremos sua horta e sua produção.</Text>
        <Botao color="marrom" text="Começar" onPress={() => router.push({ pathname: 'Login' })} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1
  },
  formulario: {
        flex: 1,
        backgroundColor: '#FAF4F0',
        borderTopLeftRadius: 20,
        borderTopRightRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 34,
        paddingLeft: 14,
        paddingRight:14
  },
  titulo: {
    fontSize: 24,
    fontFamily: "Arial",
    textAlign:'center'
    
  },
  subTitulo: {
    paddingTop:10,
    fontSize: 15,
    fontFamily: "Arial",
    textAlign: "center",
    color: "#757575"
  }

});
export default Index;
