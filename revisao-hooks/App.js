import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Contador: {contador}</Text>
      <View style={{flexDirection: "row", gap: 20}}>
        <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, padding: 5}} onPress={() => setContador(contador + 1)}>
          <Text>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth: 1, borderRadius: 5, padding: 5}} onPress={() => setContador(contador - 1)}>
          <Text>Decrementar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
