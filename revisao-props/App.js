import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Person from "./src/components/Person/Person";

export default function App() {
  return (
    <View style={styles.container}>
      <Person name="Guilherme Vascaíno Cabeçudo" age={18} />
      <Person name="Zezin Pegador" age={"O suficiente"} />
      <Person name="Gabriel Sampaio" age={18} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
    gap: 16,
  },
});
