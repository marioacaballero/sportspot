import React from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Signup({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <LinearGradient
        colors={["#F25910", "#F6B99C", "#FFF", "#FEF8F5", "#652794", "#40036F"]}
        style={styles.linearGradient}
      >
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ki44nk1ipb-1419%3A26538?alt=media&token=5e9d2fb3-e41f-4332-b494-10f6bdae5394",
            }}
          />
          <Text
            style={{
              color: "#F25910",
              fontSize: 22,
              marginBottom: 49,
              marginHorizontal: 47,
            }}
          >
            {"ENCUENTRA TU PRUEBA"}
          </Text>
          <View
            style={{
              backgroundColor: "#F2F1F8",
              borderRadius: 50,
              paddingVertical: 20,
              paddingHorizontal: 22,
              marginBottom: 10,
              marginHorizontal: 21,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 18,
              }}
            >
              {"Nombre de usuario"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#F2F1F8",
              borderRadius: 50,
              paddingVertical: 20,
              paddingHorizontal: 22,
              marginBottom: 10,
              marginHorizontal: 21,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 18,
              }}
            >
              {"Email"}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#F2F1F8",
              borderRadius: 50,
              paddingVertical: 20,
              paddingHorizontal: 21,
              marginBottom: 10,
              marginHorizontal: 21,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 18,
              }}
            >
              {"Contraseña"}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#F25910",
              borderRadius: 50,
              paddingVertical: 20,
              marginBottom: 12,
              marginHorizontal: 21,
            }}
          >
            <Text
              style={{
                color: "#F2F1F8",
                fontSize: 18,
              }}
              onPress={() => navigation.navigate("Login")}
            >
              {"Registrarse"}
            </Text>
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 15,
              marginHorizontal: 72,
            }}
          >
            {"¿Has olvidado tu contraseña?"}
          </Text>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: "100%",
  },
  image: {
    width: 262,
    height: 69,
    marginVertical: 60,
    marginBottom: 11,
    marginHorizontal: 49,
  },
});
