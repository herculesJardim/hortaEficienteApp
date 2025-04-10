import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fundo from './componentes/Fundo';
import TextoInicio from './componentes/TextoInicio';
import BtAction from './componentes/BtAction';

export default function App() {
  return (
    <View style={styles.container}>
      <Fundo/>
      <TextoInicio/>
      <BtAction color="marrom" text="Começar"/>
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
