import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import PopUpSportman from "../bodyHome/component/PopUpSportman";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchPress = () => {
    setShowSearch(true);
  };

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
          paddingTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 19,
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
            style={styles.crown}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/6dugyuvkp9r-1419%3A28898?alt=media&token=3f9561df-7ea2-4913-b4c8-4d9756fe4799",
            }}
          />
          <View
            style={{
              width: 19,
            }}
          >
            <Image
              style={styles.Notifications}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/u3swydel8-1419%3A28904?alt=media&token=13b9176e-837d-4d05-81b5-241133450d7f",
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
        <View>
          {showSearch ? (
            <PopUpSportman />
          ) : (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FCECE7",
                borderRadius: 50,
                paddingVertical: 10,
                paddingHorizontal: 12,
                marginBottom: 21,
                marginHorizontal: 20,
              }}
              onPress={handleSearchPress}
            >
              <Image
                style={{ width: 20, height: 20 }} // Ajusta el estilo según tus necesidades
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bzymlkrnmz-1557%3A26470?alt=media&token=efca5697-3fe6-41df-862c-fab2226119ae",
                }}
              />
              <Text
                style={{
                  color: "#F25910",
                  fontSize: 16,
                  marginLeft: 8, // Ajusta según tus necesidades
                }}
              >
                {"Buscar"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
            marginHorizontal: 71,
          }}
        >
          <Text
            style={{
              color: "#40036F",
              fontSize: 16,
            }}
          >
            {"Deportista"}
          </Text>
          <Text
            style={{
              color: "#E2DCEC",
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
            marginBottom: 19,
            marginHorizontal: 109,
          }}
        ></View>
        <Text
          style={{
            color: "#40036F",
            fontSize: 16,
            marginBottom: 13,
            marginHorizontal: 18,
          }}
        >
          {"Últimas horas de inscripción"}
        </Text>
        <ScrollView
          horizontal
          style={{
            flexDirection: "row",
            marginBottom: 18,
            marginHorizontal: 16,
          }}
        >
          <View
            style={{
              width: 187,
              alignSelf: "flex-start",
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              paddingBottom: 21,
              paddingHorizontal: 6,
              marginRight: 15,
              shadowColor: "#27272733",
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                height: 95,
                marginBottom: 8,
              }}
            />
            <Text
              style={{
                color: "#F25910",
                fontSize: 12,
                marginBottom: 4,
              }}
            >
              {"Torneo de baloncesto"}
            </Text>
            <Text
              style={{
                color: "#2A2749",
                fontSize: 10,
                marginBottom: 2,
              }}
            >
              {"Lorem ipsum dolor sit amet. "}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 10,
              }}
            >
              {"¡La inscripción acaba en 10 horas!"}
            </Text>
          </View>
          <View
            style={{
              width: 187,
              alignSelf: "flex-start",
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              paddingBottom: 21,
              paddingHorizontal: 6,
              shadowColor: "#27272733",
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                height: 95,
                marginBottom: 7,
              }}
            />
            <Text
              style={{
                color: "#F25910",
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              {"Ciclismo"}
            </Text>
            <Text
              style={{
                color: "#2A2749",
                fontSize: 10,
                marginBottom: 2,
              }}
            >
              {"Lorem ipsum dolor sit amet. "}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 10,
              }}
            >
              {"¡La inscripción acaba en 10 horas!"}
            </Text>
          </View>
        </ScrollView>
        <Text
          style={{
            color: "#40036F",
            fontSize: 16,
            marginBottom: 14,
            marginHorizontal: 18,
          }}
        >
          {"Últimas pruebas añadidas"}
        </Text>
        <ScrollView
          horizontal
          style={{
            flexDirection: "row",
            marginBottom: 21,
            marginHorizontal: 16,
          }}
        >
          <View
            style={{
              width: 187,
              alignSelf: "flex-start",
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              paddingBottom: 21,
              paddingHorizontal: 6,
              marginRight: 15,
              shadowColor: "#27272733",
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                height: 95,
                marginBottom: 7,
              }}
            />
            <Text
              style={{
                color: "#F25910",
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              {"Lorem ipsum"}
            </Text>
            <Text
              style={{
                color: "#2A2749",
                fontSize: 10,
                marginBottom: 2,
              }}
            >
              {"Lorem ipsum dolor sit amet. "}
            </Text>
            <Text
              style={{
                color: "#2A2749",
                fontSize: 10,
              }}
            >
              {"Lorem ipsum dolor sit amet. "}
            </Text>
          </View>
          <View
            style={{
              width: 187,
              alignSelf: "flex-start",
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              paddingBottom: 21,
              paddingHorizontal: 6,
              shadowColor: "#27272733",
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                height: 95,
                marginBottom: 7,
              }}
            />
            <Text
              style={{
                color: "#F25910",
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              {"Lorem ipsum"}
            </Text>
            <Text
              style={{
                color: "#2A2749",
                fontSize: 10,
                marginBottom: 2,
              }}
            >
              {"Lorem ipsum dolor sit amet. "}
            </Text>
            <Text
              style={{
                color: "#2A2749",
                fontSize: 10,
              }}
            >
              {"Lorem ipsum dolor sit amet. "}
            </Text>
          </View>
        </ScrollView>
        <Text
          style={{
            color: "#40036F",
            fontSize: 16,
            marginBottom: 11,
            marginHorizontal: 18,
          }}
        >
          {"Resultados de las útlimas pruebas"}
        </Text>
        <ScrollView
          horizontal
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 187,
              alignSelf: "flex-start",
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              marginLeft: 16,
              marginRight: 15,
              shadowColor: "#27272733",
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <ImageBackground
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              imageStyle={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }}
              style={{
                paddingLeft: 149,
                paddingRight: 1,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 37,
                  height: 24,
                  marginTop: 49,
                }}
              />
            </ImageBackground>
          </View>
          <View
            style={{
              width: 187,
              alignSelf: "flex-start",
              backgroundColor: "#FFFFFF",
              borderRadius: 14,
              shadowColor: "#27272733",
              shadowOpacity: 0.2,
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                height: 95,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 38,
              left: 0,
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
                  marginTop: 12,
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
                  marginTop: 6,
                  marginRight: 128,
                }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 6,
                  marginRight: 47,
                }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 19,
                  height: 20,
                  marginTop: 6,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  crown: {
    width: 29,
    height: 21.5,
    marginRight: 5,
  },
  Notifications: {
    width: 19,
    height: 21.5,
    marginTop: 2,
  },
  Search: {
    width: 29,
    height: 29,
  },
});
