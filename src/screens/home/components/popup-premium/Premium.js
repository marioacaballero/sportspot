import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Premium({ setShowPremium }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        // backgroundColor: "red",
        borderRadius: 10,
        paddingVertical: 20,
        marginBottom: 9,
        width: "100%",
        // width: 250,
        // shadowColor: "#45434375",
        // shadowOpacity: 0.5,
        // shadowOffset: {
        //   width: 4,
        //   height: 4,
        // },
        // shadowRadius: 10,
        // elevation: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 13,
          marginHorizontal: 19,
        }}
      >
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode={"stretch"}
          style={{
            width: 29,
            height: 21,
            marginRight: 15,
          }}
        />
        <Text
          style={{
            color: "#F25910",
            fontSize: 18,
            flex: 1,
          }}
        >
          {"Premium"}
        </Text>
        <Text onPress={() => setShowPremium(false)}>X</Text>
      </View>
      <Text
        style={{
          color: "#40036F",
          fontSize: 11,
          marginBottom: 18,
          marginHorizontal: 25,
          // width: 298,
        }}
      >
        {
          "Pásate al siguiente nivel y desbloquea un sin fin de beneficios exclusivos en el mundo del deporte"
        }
      </Text>
      <Text
        style={{
          color: "#40036F",
          fontSize: 10,
          marginBottom: 15,
          marginHorizontal: 20,
          // width: 308,
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
          // width: 288,
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
          marginHorizontal: 19,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 14,
          }}
          onPress={() => {
            setShowPremium(false);
            navigation.navigate("Suscriptions");
          }}
        >
          {"Acceder a planes de suscripción"}
        </Text>
      </View>
    </View>
  );
}
