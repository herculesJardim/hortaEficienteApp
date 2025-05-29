import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from './telas/TelaLogin';
import TelaInicial from './telas/TelaInicial';
import CampoTexto from './componentes/Campo';
import Home from './telas/Home';
import Hortas from './telas/Hortas';
export default function App() {
  return (
    <View style={styles.container}>
     {/*<TelaInicial/> <TelaLogin/><Home/><Hortas/>*/}
     
     <Hortas/>

     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
