import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";

//IMPORTAR RECURSOS DO EXPO-NOTIFICATION

import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";

//SOLICITA PERMISSÃO DE NOTIFICAÇÕES AO INICIAR O APP
Notifications.requestPermissionsAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //MOSTRAR ALERTA QUANDO NOTIFICAÇÃO FOR RECEBIDA
    shouldShowAlert: true,
    //TOCAR SOM QUANDO NOTIFICAÇÃO FOR RECEBIDA
    shouldPlaySound: false,
    //NUMERO DE NOTIFICACOES NO ICONE DO APP
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [sound, setSound] = useState(null);

  async function playSound() {

    const { sound: newSound } = await Audio.Sound.createAsync(
      require("./src/assets/sound/timao.mp3")
    );
    setSound(newSound);

    await newSound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  //FUNCAO PARA LIDAR COM A CHAMADA DE NOTIFICACAO
  const HandleCallNotifications = async () => {
    //OBTEM O STATUS DA PERMISSAO
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("Você não permitiu as notificações!");
      return;
    }

    await playSound();

    //AGENDA UMA NOTIFICACAO
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao Senai",
        body: "Notificação recebida",
      },
      trigger: null,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => HandleCallNotifications()}
        style={styles.button}
      >
        <Text style={styles.text}>Clique aqui!</Text>
      </TouchableOpacity>
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
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
