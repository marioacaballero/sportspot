import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function SubscriptionPlans({ navigation }) {
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 25,
            marginHorizontal: 21,
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
            {"PLANES DE\nSUSCRIPCIÓN"}
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
                top: 0,
                right: -1,
                width: 5,
                height: 5,
              }}
            />
          </View>
        </View>
        <View style={{}}>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              paddingTop: 82,
              paddingBottom: 7,
              marginHorizontal: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 30,
                marginHorizontal: 22,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 28,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: "#40036F",
                  fontSize: 12,
                  width: 245,
                }}
              >
                {
                  "Alertas personalizadas en tiempo real que te informarán sobre eventos importantes. "
                }
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 33,
                marginHorizontal: 26,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 24,
                  height: 32,
                }}
              />
              <Text
                style={{
                  color: "#40036F",
                  fontSize: 12,
                  width: 241,
                }}
              >
                {
                  "Tendrás acceso exclusivo a registro detallado (ubicación y radio de notificaciones) de deportes precedentes."
                }
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 24,
                marginHorizontal: 19,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 22,
                  height: 26,
                  marginTop: 1,
                }}
              />
              <Text
                style={{
                  color: "#40036F",
                  fontSize: 12,
                  width: 254,
                }}
              >
                {
                  "Reconocemos tu compromiso y dedicación, por eso cada uso de la app te permitirá acumular puntos que podrás canjear por recompensas y beneficios adicionales."
                }
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 24,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  width: 28,
                  height: 26,
                }}
              />
              <Text
                style={{
                  color: "#40036F",
                  fontSize: 12,
                  width: 253,
                }}
              >
                {
                  "Nos preocupamos por la autenticidad de tu experiencia, contarás con la capacidad de validar reseñas, asegurando la calidad de la información. "
                }
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 33,
                marginHorizontal: 24,
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
              <Text
                style={{
                  color: "#40036F",
                  fontSize: 12,
                  width: 232,
                }}
              >
                {
                  "Hemos establecido colaboraciones exclusivas que te brindarán descuentos especiales con nuestros colaboradores. "
                }
              </Text>
            </View>
            <Text
              style={{
                color: "#F25910",
                fontSize: 12,
                marginBottom: 23,
                marginHorizontal: 36,
                width: 264,
              }}
            >
              {
                "¡Actúa ahora y experimenta una forma\ncompletamente nueva de abordar tus\nobjetivos deportivos con Spotsport Premium!"
              }
            </Text>
            <View
              style={{
                width: 282,
                height: 38,
                alignItems: "center",
                backgroundColor: "#F25910",
                borderRadius: 50,
                paddingVertical: 14,
                marginBottom: 16,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"Plan mensual"}
              </Text>
            </View>
            <View
              style={{
                width: 282,
                height: 38,
                alignItems: "center",
                backgroundColor: "#F25910",
                borderRadius: 50,
                paddingVertical: 13,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"Plan trimestral"}
              </Text>
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
          <Text
            style={{
              position: "absolute",
              top: 0,
              left: 33,
              color: "#40036F",
            }}
          >
            {"¡Estas son las ventajas que obtendrías al hacerte Premium!\n\n"}
          </Text>
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
