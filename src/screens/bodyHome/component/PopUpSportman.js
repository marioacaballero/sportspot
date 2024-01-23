import { Image, ImageBackground, ScrollView, Text, View } from "react-native";

export default function PopUpSportman() {
  return (
    <ScrollView
      style={{
        width: "100%",
        paddingTop: 70,
        paddingBottom: -151,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",

          backgroundColor: "#FDF0E7",
          borderRadius: 50,
          padding: 10,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        <ImageBackground
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode={"stretch"}
          style={{
            width: 24,
            paddingHorizontal: 7,
            marginRight: 13,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              height: 14,
              marginTop: 5,
            }}
          />
        </ImageBackground>
        <Text
          style={{
            color: "#40036F",
            fontSize: 14,
            flex: 1,
          }}
        >
          {"Localización"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FDF0E7",
          borderRadius: 50,
          padding: 10,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        <ImageBackground
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode={"stretch"}
          style={{
            width: 24,
            paddingHorizontal: 6,
            marginRight: 13,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              height: 10,
              marginTop: 7,
            }}
          />
        </ImageBackground>
        <Text
          style={{
            color: "#40036F",
            fontSize: 14,
            flex: 1,
          }}
        >
          {"Deporte"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FDF0E7",
          borderRadius: 50,
          padding: 10,
          marginBottom: 10,
          marginHorizontal: 20,
        }}
      >
        <ImageBackground
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode={"stretch"}
          style={{
            width: 24,
            paddingHorizontal: 6,
            marginRight: 13,
          }}
        >
          <ImageBackground
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              height: 12,
              marginTop: 6,
            }}
          ></ImageBackground>
        </ImageBackground>
        <Text
          style={{
            color: "#40036F",
            fontSize: 14,
            flex: 1,
          }}
        >
          {"Fecha"}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#F25910",
          borderRadius: 50,
          paddingVertical: 14,
          marginBottom: 19,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
          }}
        >
          {"Buscar"}
        </Text>
      </View>

      <ScrollView
        horizontal
        style={{
          flexDirection: "row",
          marginBottom: 1,
          marginHorizontal: 16,
        }}
      ></ScrollView>
    </ScrollView>
  );
}
