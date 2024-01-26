import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import lol from "./src/assets/img/logo.png";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useHover, useFocus, useActive } from "react-native-web-hooks";
import { useRef } from "react";

SplashScreen.preventAutoHideAsync();

export const padding = (a, b, c, d) => ({
  paddingTop: a,
  paddingRight: b ?? a,
  paddingBottom: c ?? a,
  paddingLeft: d ?? b ?? a,
});

export default function App() {
  let [] = useFonts({
    Poppins_400Regular,

    Poppins_900Black,
  });

  const ref = useRef(null);

  const isHovered = useHover(ref);
  const isFocused = useFocus(ref);
  const isActive = useActive(ref);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={lol} />
      <Text ref={ref} style={styles.title}>login</Text>

      <View style={styles.inputsContainer}>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.inputArea}
            placeholder="Digite o seu email"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Senha</Text>
          <TextInput
            style={styles.inputArea}
            placeholder="Digite a sua senha"
          />
        </View>
      </View>
      <Pressable
        ref={ref}
        style={[styles.btnLogin, isActive && { backgroundColor: "#D5B261" }]}
      >
        <Text style={[styles.btnText, isActive && { color: "white" }]}>
          entrar
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins_900Black",
    textTransform: "uppercase",
    fontWeight: "bold",
    width: "80%",
    textAlign: "center",
    borderBottomWidth: 3,
  },
  image: {
    width: 250,
    height: 80,
    aspectRatio: 16 / 9,
  },
  inputsContainer: {
    width: "80%",
    gap: 16,
  },
  inputTitle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  input: {
    gap: 8,
  },
  inputArea: {
    fontFamily: "Poppins_400Regular",
    padding: 8,
    width: "100%",
    color: "#999999",
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 4,
  },
  btnLogin: {
    backgroundColor: "#fff",
    border: "3px solid #D5B261",
    borderRadius: 4,
    fontSize: 16,
    fontWeight: "bold",
    ...padding(8, 16),
    textTransform: "uppercase",
  },
  btnText: {
    color: "#D5B261",
    fontFamily: "Poppins_900Black",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
