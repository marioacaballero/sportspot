import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Map() {
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
          borderRadius: 8,
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#F9F9F9",
            borderRadius: 8,
            paddingTop: 55,
            paddingBottom: 86,
            marginBottom: 34,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 84,
              marginHorizontal: 53,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 26,
                height: 32,
              }}
            />
            <View
              style={{
                flex: 1,
              }}
            ></View>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 26,
                height: 32,
                marginTop: 22,
              }}
            />
          </View>
          <View
            style={{
              width: 78,
              height: 78,
              borderColor: "#5E27FD",
              borderWidth: 1,
              marginBottom: 6,
              marginHorizontal: 89,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 26,
                height: 32,
                marginTop: 10,
              }}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                width: 26,
                height: 32,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 21,
          }}
        >
          <Text
            style={{
              color: "#40036F",
              fontSize: 16,
              marginRight: 4,
              flex: 1,
            }}
          >
            {"Rango de distancia"}
          </Text>
          <Text
            style={{
              color: "#40036F",
              fontSize: 18,
            }}
          >
            {"20km"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 39,
          }}
        >
          <View
            style={{
              width: 14,
              height: 19,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
              marginTop: 32,
              marginLeft: 84,
              marginRight: 71,
            }}
          ></View>
          <View
            style={{
              width: 15,
              height: 38,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
              marginTop: 13,
              marginRight: 42,
            }}
          ></View>
          <View
            style={{
              width: 15,
              height: 38,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
              marginTop: 13,
            }}
          ></View>
          <View style={{}}>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 35,
                height: 35,
                backgroundColor: "#FFFFFF",
                borderColor: "#F25910",
                borderRadius: 9,
                borderWidth: 1,
                paddingHorizontal: 10,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  height: 8,
                  marginTop: 14,
                }}
              />
            </View>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 35,
                height: 35,
                backgroundColor: "#FFFFFF",
                borderColor: "#F25910",
                borderRadius: 9,
                borderWidth: 1,
                paddingHorizontal: 10,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  height: 8,
                  marginTop: 14,
                }}
              />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 333,
              height: 1,
              backgroundColor: "#40036F",
              paddingHorizontal: 79,
            }}
          >
            <View
              style={{
                width: 164,
                height: 1,
                backgroundColor: "#40036F",
              }}
            ></View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 98,
              width: 14,
              height: 51,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 112,
              width: 15,
              height: 38,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 127,
              width: 14,
              height: 29,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 141,
              width: 14,
              height: 25,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 155,
              width: 14,
              height: 29,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 135,
              width: 14,
              height: 29,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 121,
              width: 14,
              height: 25,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 107,
              width: 14,
              height: 29,
              backgroundColor: "#E6E6E6",
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          ></View>
        </View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#F25910",
            borderRadius: 50,
            paddingVertical: 14,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
            }}
          >
            {"Listo"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
