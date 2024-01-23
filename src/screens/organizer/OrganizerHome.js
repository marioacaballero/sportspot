import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";

export default function OrganizerHome() {
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
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 22,
            marginHorizontal: 22,
          }}
        >
          <Text
            style={{
              color: "#40036F",
              fontSize: 24,
              marginRight: 4,
              flex: 1,
            }}
          >
            {"INICIO"}
          </Text>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 29,
              height: 21,
              marginRight: 10,
            }}
          />
          <View
            style={{
              width: 19,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 22,
              }}
            />
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                top: -1,
                right: -1,
                width: 5,
                height: 5,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
            marginHorizontal: 75,
          }}
        >
          <Text
            style={{
              color: "#E2DCEC",
              fontSize: 16,
            }}
          >
            {"Deportista"}
          </Text>
          <Text
            style={{
              color: "#40036F",
              fontSize: 16,
            }}
          >
            {"Organizador"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            marginHorizontal: 113,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 6,
              height: 6,
            }}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              width: 6,
              height: 6,
            }}
          />
        </View>
        <View style={{}}>
          <View
            style={{
              backgroundColor: "#FEEEE7",
              borderRadius: 10,
              paddingVertical: 23,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 14,
                marginBottom: 25,
                marginHorizontal: 52,
                width: 216,
              }}
            >
              {"Breve descripción del servicio a\norganizadores"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 74,
                marginHorizontal: 21,
              }}
            >
              <View
                style={{
                  width: 67,
                  height: 62,
                  borderColor: "#5E27FD",
                  borderWidth: 1,
                  marginRight: 29,
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Text
                  style={{
                    color: "#F25910",
                    fontSize: 14,
                    marginBottom: 8,
                    width: 182,
                  }}
                >
                  {"NUEVO PUNTO DE \nCONTACTO"}
                </Text>
                <Text
                  style={{
                    color: "#642793",
                    fontSize: 12,
                    width: 182,
                  }}
                >
                  {"Entre deportistas y organizadores."}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 76,
                marginHorizontal: 21,
              }}
            >
              <View
                style={{
                  flex: 1,
                  alignSelf: "flex-start",
                  marginRight: 4,
                }}
              >
                <Text
                  style={{
                    color: "#F25910",
                    fontSize: 14,
                    marginBottom: 8,
                    width: 236,
                  }}
                >
                  {"AUMENTO DE\nINSCRIPCIONES"}
                </Text>
                <Text
                  style={{
                    color: "#642793",
                    fontSize: 12,
                    width: 236,
                  }}
                >
                  {"En las competiciones ofrecidas por los organizadores"}
                </Text>
              </View>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 3,
                  height: 23,
                  marginTop: 35,
                  marginRight: 1,
                }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 30,
                  height: 56,
                  marginTop: 2,
                  marginRight: 1,
                }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 3,
                  height: 23,
                  marginTop: 35,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 73,
                marginHorizontal: 20,
              }}
            >
              <View
                style={{
                  width: 57,
                  height: 56,
                  backgroundColor: "#40036F",
                  borderColor: "#5E27FD",
                  borderWidth: 1,
                }}
              ></View>
              <View
                style={{
                  width: 158,
                }}
              >
                <Text
                  style={{
                    color: "#F25910",
                    fontSize: 14,
                    marginBottom: 7,
                    width: 158,
                  }}
                >
                  {"AUMENTO DE\nINGRESOS"}
                </Text>
                <Text
                  style={{
                    color: "#642793",
                    fontSize: 12,
                    width: 158,
                  }}
                >
                  {"Para los organizadores de los eventos deportivos"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <View
                style={{
                  width: 152,
                }}
              >
                <Text
                  style={{
                    color: "#F25910",
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  {"ÉXITO DE PRUEBAS"}
                </Text>
                <Text
                  style={{
                    color: "#642793",
                    fontSize: 12,
                    width: 152,
                  }}
                >
                  {
                    "Por parte de los deportistas,\ngenerando renombre en\ncompeticiones de los\norganizadores"
                  }
                </Text>
              </View>
              <View
                style={{
                  width: 62,
                  backgroundColor: "#40036F",
                  borderColor: "#5E27FD",
                  borderWidth: 1,
                  paddingHorizontal: 15,
                }}
              >
                <ImageBackground
                  source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                  resizeMode={"stretch"}
                  style={{
                    paddingHorizontal: 7,
                    marginTop: 29,
                  }}
                >
                  <Image
                    source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                    resizeMode={"stretch"}
                    style={{
                      height: 19,
                      marginTop: 8,
                    }}
                  />
                </ImageBackground>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 360,
              height: 65,
              backgroundColor: "#F2F1F8",
              paddingHorizontal: 28,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 16,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: 13,
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
                  width: 33,
                  height: 33,
                }}
              />
              <View style={{}}>
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
                  marginTop: 7,
                  marginRight: 128,
                }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 7,
                  marginRight: 47,
                }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 20,
                  marginTop: 7,
                }}
              />
            </View>
          </View>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode={"stretch"}
            style={{
              position: "absolute",
              bottom: 51,
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
