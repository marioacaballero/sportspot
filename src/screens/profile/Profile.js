import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Profile() {
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
          paddingTop: 74,
        }}
      >
        <Text
          style={{
            color: "#40036F",
            fontSize: 30,
            marginBottom: 29,
            marginHorizontal: 22,
          }}
        >
          {"TU PERFIL"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30,
            marginHorizontal: 20,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 8,
              width: 132,
              height: 122,
            }}
          />
          <View
            style={{
              width: 156,
            }}
          >
            <Text
              style={{
                color: "#F25910",
                fontSize: 20,
                marginBottom: 16,
                width: 156,
              }}
            >
              {"Lara Macías\nBlanco Carrrilho"}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 16,
              }}
            >
              {"Mujer, 23 años"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FCECE7",
            borderRadius: 50,
            paddingVertical: 6,
            paddingHorizontal: 10,
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 30,
              backgroundColor: "#F25910",
              borderRadius: 50,
              paddingHorizontal: 7,
              marginRight: 11,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 16,
                marginTop: 7,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 16,
              flex: 1,
            }}
          >
            {"Gestiona tu cuenta"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FCECE7",
            borderRadius: 50,
            paddingVertical: 6,
            paddingHorizontal: 10,
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 30,
              backgroundColor: "#F25910",
              borderRadius: 50,
              paddingHorizontal: 7,
              marginRight: 12,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 15,
                marginTop: 8,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 16,
              flex: 1,
            }}
          >
            {"Premios alcanzados"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FCECE7",
            borderRadius: 50,
            paddingVertical: 6,
            paddingHorizontal: 10,
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 30,
              backgroundColor: "#F25910",
              borderRadius: 50,
              paddingHorizontal: 6,
              marginRight: 12,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 14,
                marginTop: 8,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 16,
              flex: 1,
            }}
          >
            {"Entidades colaboradores"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#FCECE7",
            borderRadius: 50,
            paddingVertical: 6,
            paddingHorizontal: 10,
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 30,
              backgroundColor: "#F25910",
              borderRadius: 50,
              paddingHorizontal: 7,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 14,
                marginTop: 9,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 16,
            }}
          >
            {"Contactar con atención al cliente"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FCECE7",
            borderRadius: 50,
            paddingVertical: 6,
            paddingHorizontal: 10,
            marginBottom: 10,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 30,
              backgroundColor: "#F25910",
              borderRadius: 50,
              paddingHorizontal: 8,
              marginRight: 11,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 14,
                marginTop: 9,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 16,
              flex: 1,
            }}
          >
            {"Trabaja con nosotros"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#40036F",
            borderRadius: 50,
            paddingVertical: 6,
            paddingHorizontal: 10,
            marginBottom: 142,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 30,
              backgroundColor: "#40036F",
              borderRadius: 50,
              paddingHorizontal: 7,
              marginRight: 11,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 16,
                marginTop: 7,
              }}
            />
          </View>
          <Text
            style={{
              color: "#E2DCEC",
              fontSize: 16,
              flex: 1,
            }}
          >
            {"Cerrar sesión"}
          </Text>
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
