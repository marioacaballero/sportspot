import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function PaymentDetails({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingTop: 72,
        }}
      >
        <Text
          style={{
            color: "#40036F",
            fontSize: 24,
            marginBottom: 23,
            marginHorizontal: 22,
            width: 316,
          }}
        >
          {"GESTIONA TU CUENTA"}
        </Text>
        <Text
          style={{
            color: "#F25910",
            fontSize: 14,
            marginBottom: 15,
            marginHorizontal: 21,
          }}
        >
          {"Datos de pago"}
        </Text>
        <View
          style={{
            borderColor: "#D7D7D7",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 18,
            paddingHorizontal: 19,
            marginBottom: 415,
            marginHorizontal: 20,
            shadowColor: "#00000040",
            shadowOpacity: 0.3,
            shadowOffset: {
              width: -2,
              height: -2,
            },
            shadowRadius: 4,
            elevation: 4,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 16,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 25,
                height: 22,
                marginTop: 2,
                marginRight: 24,
              }}
            />
            <View
              style={{
                flex: 1,
                alignSelf: "flex-start",
              }}
            >
              <Text
                style={{
                  color: "#40036F",
                  fontSize: 14,
                  marginBottom: 7,
                }}
              >
                {"Datos de pago"}
              </Text>
              <Text
                style={{
                  color: "#40036F",
                  fontSize: 10,
                  width: 231,
                }}
              >
                {
                  "Añade o elimina métdos de pago de forma segura para agilizar el proceso de inscripción\n\n"
                }
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "#40036F",
              borderRadius: 50,
              paddingVertical: 14,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
              }}
              onPress={() => navigation.navigate("AddCard")}
            >
              {"Añadir tarjeta"}
            </Text>
          </View>
        </View>
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F2F1F8",
              paddingVertical: 16,
              paddingHorizontal: 28,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 16,
                height: 16,
              }}
            />
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
              }}
            ></View>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 33,
                height: 33,
              }}
            />
            <View
              style={{
                alignSelf: "stretch",
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 6,
                  height: 8,
                }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 11,
                  height: 14,
                }}
              />
            </View>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 22,
                height: 20,
                marginRight: 128,
              }}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 20,
                height: 20,
                marginRight: 47,
              }}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 19,
                height: 20,
              }}
            />
          </View>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              position: "absolute",
              top: -10,
              right: 158,
              width: 37,
              height: 24,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
