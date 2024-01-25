import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import yuriAlberto from "./src/assets/img/yuri-alberto.webp";

export default function App() {
  return (
    <View style={styles.container}>
      {/* imagem */}
      <Image style={styles.image} source={yuriAlberto} />

      <Text style={styles.text}>Não sei fazer gol🤙</Text>

      <TextInput defaultValue="Yuri Aberto" style={styles.input} />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => Alert.alert("Secou!")}
        color="black"
      >
        <Text style={styles.btnText}>Secar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 24,
  },
  input: {
    width: "90%",
    height: 40,

    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  btn: {
    width: "90%",
    height: 40,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
