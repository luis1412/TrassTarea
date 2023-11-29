import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PantallaInicio from './components/PantallaInicio';
import ListadoTareas from './ListadoTareas';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ListadoTareas/>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
