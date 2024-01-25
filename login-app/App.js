import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import lol from "./src/assets/img/logo.png";
// import { useFonts } from 'expo-font';

export const padding = (a, b, c, d) => ({
  paddingTop: a,
  paddingRight: b ?? a,
  paddingBottom: c ?? a,
  paddingLeft: d ?? b ?? a,
});

export default function App() {
  // const [fontsLoaded, fontError] = useFonts({
  //   "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={lol} />
      <Text style={styles.title}>login</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.inputArea}
            defaultValue="Digite o seu email"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Senha</Text>
          <TextInput
            style={styles.inputArea}
            defaultValue="Digite a sua senha"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnText}>entrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: "Poppins-Regular",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  title: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 80,
    aspectRatio: 16 / 9,
  },
  inputsContainer: {
    width: "80%",
    gap: 16,
  },
  inputTitle: {
    fontSize: 16,
  },
  input: {
    gap: 8,
  },
  inputArea: {
    padding: 8,
    width: "100%",
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 4,
  },
  btnLogin: {
    backgroundColor: "#fff",
    border: "1px solid #D5B261",
    borderRadius: 4,
    fontSize: 16,
    fontWeight: "bold",
    ...padding(8, 16),
    textTransform: "uppercase",
  },
  btnText: {
    color: "#D5B261",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
