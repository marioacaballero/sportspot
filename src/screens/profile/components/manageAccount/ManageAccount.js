import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function ManageAccount({ navigation }) {
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
            marginBottom: 25,
            marginHorizontal: 22,
            width: 316,
          }}
        >
          {"GESTIONA TU CUENTA"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#D7D7D7",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 15,
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
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 25,
              height: 24,
              marginRight: 21,
            }}
          />
          <View
            style={{
              flex: 1,
              marginRight: 4,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 14,
                marginBottom: 7,
              }}
              onPress={() => navigation.navigate("Edit")}
            >
              {"Editar perfil"}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 10,
              }}
            >
              {"Actualiza los datos de tu cuenta"}
            </Text>
          </View>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 15,
              height: 12,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor: "#D7D7D7",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 17,
            paddingHorizontal: 19,
            marginBottom: 15,
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
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 24,
              height: 24,
            }}
          />
          <View
            style={{
              width: 202,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 14,
                marginBottom: 7,
              }}
              onPress={() => navigation.navigate("Security")}
            >
              {"Seguirdad"}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 10,
              }}
            >
              {"Mantén segura tu cuenta, elimina tu cuenta"}
            </Text>
          </View>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 15,
              height: 12,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#D7D7D7",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 18,
            paddingHorizontal: 19,
            marginBottom: 364,
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
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 25,
              height: 22,
              marginRight: 24,
            }}
          />
          <View
            style={{
              flex: 1,
              marginRight: 4,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 14,
                marginBottom: 7,
              }}
              onPress={() => navigation.navigate("Payment")}
            >
              {"Datos de pago"}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 10,
              }}
            >
              {"Elimina o añade métodos de pago"}
            </Text>
          </View>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 15,
              height: 12,
            }}
          />
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
