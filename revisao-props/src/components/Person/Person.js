import { StyleSheet, Text, View } from "react-native";

const Person = ({ name, age }) => {
  return (
    <View style={styles.personContainer}>
      <Text style={styles.personText}>Nome: {name}</Text>
      <Text style={styles.personText}>Idade: {age}</Text>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  personText: {
    fontSize: 20,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  personContainer: {
    backgroundColor: "#438240",
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
});
