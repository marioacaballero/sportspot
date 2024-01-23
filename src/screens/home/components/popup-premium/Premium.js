import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Premium({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        paddingVertical: 5,
        shadowColor: "#45434375",
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowRadius: 10,
        elevation: 10,
      }}
    >
      <Text
        style={{
          color: "#40036F",
          fontSize: 10,
          marginBottom: 15,
          marginHorizontal: 20,
          width: 280,
        }}
      >
        {
          "Estamos seguros de que te encantará tu experiencia deportiva con Spotsport Premium. Además, estamos ofreciendo una oferta especial para nuestros usuarios existentes. ¡No querrás perdértela! Para más información puedes contactar con nuestro servicio de soporte técnico"
        }
      </Text>
      <Text
        style={{
          color: "#F25910",
          fontSize: 14,
          marginBottom: 23,
          marginHorizontal: 30,
          width: 260,
        }}
      >
        {
          "¡Actúa ahora y experimenta una forma\ncompletamente nueva de abordar tus\nobjetivos deportivos con Spotsport Premium!"
        }
      </Text>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#F25910",
          borderRadius: 50,
          paddingVertical: 13,
          marginBottom: 42,
          marginHorizontal: 19,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 14,
          }}
        >
          {"Acceder a planes de suscripción"}
        </Text>
      </View>
    </View>
  );
}
