import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fundo from './componentes/Fundo';
import Btcomecar from './componentes/Btcomecar';
import TextoInicio from './componentes/TextoInicio';

export default function App() {
  return (
    <View style={styles.container}>
      <Fundo/>
      <TextoInicio/>
      <Btcomecar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
