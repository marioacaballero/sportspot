import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./home/Home";
import Signup from "./signup/component/Signup";
import stylee from "./styleApp";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F25910", "#F6B99C", "#FFF", "#FEF8F5", "#652794", "#40036F"]}
        locations={[0, 0.1324, 0.3775, 0.6625, 0.91, 1.0314]} // Ajusta las posiciones
        start={{ x: 45, y: 0 }} // Controla la dirección del gradiente
        end={{ x: 1, y: 1 }} // Controla la dirección del gradiente
        style={styles.linearGradient}
      >
        <Home />
        <StatusBar /* style="auto"*/ />
        <Signup />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      "linear-gradient(162deg, red 0%, green 13.24%, black 37.75%, yellow 66.25%, blue 91%, white 103.14%)",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
