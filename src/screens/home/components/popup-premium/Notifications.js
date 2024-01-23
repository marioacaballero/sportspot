import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from "react-native";

export default function Notifications() {
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
          borderRadius: 10,
          paddingVertical: 20,
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
            marginHorizontal: 23,
          }}
        >
          <View
            style={{
              width: 19,
              marginRight: 20,
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
          <Text
            style={{
              color: "#F25910",
              fontSize: 18,
              flex: 1,
            }}
          >
            {"Notificaciones"}
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 7,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 32,
              backgroundColor: "#F25910",
              borderRadius: 4,
              paddingHorizontal: 9,
              marginRight: 11,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 17,
                marginTop: 8,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 12,
                marginBottom: 3,
              }}
            >
              {"¡Nueva prueba cerca de ti!"}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 12,
                marginHorizontal: 1,
              }}
            >
              {"Échale un vistazo"}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#C6BED5",
            fontSize: 10,
            marginBottom: 5,
            marginHorizontal: 21,
          }}
        >
          {"1 nov, a las 20:05"}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 7,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 32,
              backgroundColor: "#F25910",
              borderRadius: 4,
              paddingHorizontal: 7,
              marginRight: 11,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 19,
                marginTop: 7,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 12,
              flex: 1,
            }}
          >
            {"¡El Club Lorem Ipsum acaba de\npublicar una nueva prueba!"}
          </Text>
        </View>
        <Text
          style={{
            color: "#C6BED5",
            fontSize: 10,
            marginBottom: 5,
            marginHorizontal: 21,
          }}
        >
          {"1 nov, a las 20:05"}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 7,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 32,
              backgroundColor: "#F25910",
              borderRadius: 4,
              paddingHorizontal: 7,
              marginRight: 11,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 19,
                marginTop: 7,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 12,
              flex: 1,
            }}
          >
            {"¡El Club Lorem Ipsum acaba de\npublicar una nueva prueba!"}
          </Text>
        </View>
        <Text
          style={{
            color: "#C6BED5",
            fontSize: 10,
            marginBottom: 5,
            marginHorizontal: 21,
          }}
        >
          {"25 oct, a las 15:16"}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 7,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 32,
              backgroundColor: "#F25910",
              borderRadius: 4,
              paddingHorizontal: 9,
              marginRight: 12,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 17,
                marginTop: 8,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 12,
                marginBottom: 3,
              }}
            >
              {"¡Nueva prueba cerca de ti!"}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 12,
              }}
            >
              {"Échale un vistazo"}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#C6BED5",
            fontSize: 10,
            marginBottom: 5,
            marginHorizontal: 21,
          }}
        >
          {"20 oct, a las 21:06"}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 7,
            marginHorizontal: 8,
          }}
        >
          <View
            style={{
              width: 32,
              backgroundColor: "#F25910",
              borderRadius: 4,
              paddingHorizontal: 6,
            }}
          >
            <ImageBackground
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                paddingHorizontal: 6,
                marginTop: 9,
              }}
            >
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode={"stretch"}
                style={{
                  height: 9,
                  marginTop: 2,
                }}
              />
            </ImageBackground>
          </View>
          <View
            style={{
              width: 249,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 12,
                marginBottom: 6,
              }}
            >
              {"Prueba de ciclismo añadida recientemente"}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 12,
              }}
            >
              {"¡No te la pierdas!"}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#C6BED5",
            fontSize: 10,
            marginBottom: 5,
            marginHorizontal: 21,
          }}
        >
          {"16 oct, a las 18:07"}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 7,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 32,
              backgroundColor: "#F25910",
              borderRadius: 4,
              paddingHorizontal: 9,
              marginRight: 12,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 17,
                marginTop: 8,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "#40036F",
                fontSize: 12,
                marginBottom: 3,
              }}
            >
              {"¡Nueva prueba cerca de ti!"}
            </Text>
            <Text
              style={{
                color: "#40036F",
                fontSize: 12,
              }}
            >
              {"Échale un vistazo"}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#C6BED5",
            fontSize: 10,
            marginBottom: 5,
            marginHorizontal: 21,
          }}
        >
          {"13 oct, a las 10:53"}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 2,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 32,
              backgroundColor: "#F25910",
              borderRadius: 4,
              paddingHorizontal: 9,
              marginRight: 11,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 17,
                marginTop: 8,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 12,
              flex: 1,
            }}
          >
            {"Prueba de senderismo añadida\nrecientemente"}
          </Text>
        </View>
        <Text
          style={{
            color: "#40036F",
            fontSize: 12,
            marginBottom: 7,
            marginHorizontal: 63,
          }}
        >
          {"¡No te la pierdas!"}
        </Text>
        <Text
          style={{
            color: "#C6BED5",
            fontSize: 10,
            marginBottom: 5,
            marginHorizontal: 21,
          }}
        >
          {"9 oct, a las 13:39"}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginBottom: 11,
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 7,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              width: 32,
              backgroundColor: "#F25910",
              borderRadius: 4,
              paddingHorizontal: 7,
              marginRight: 11,
            }}
          >
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                height: 19,
                marginTop: 7,
              }}
            />
          </View>
          <Text
            style={{
              color: "#40036F",
              fontSize: 12,
              flex: 1,
            }}
          >
            {"¡El Club Lorem Ipsum acaba de\npublicar una nueva prueba!"}
          </Text>
        </View>
        <Text
          style={{
            color: "#C6BED5",
            fontSize: 10,
            marginBottom: 5,
            marginHorizontal: 21,
          }}
        >
          {"3 oct, a las 09:45"}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#E2DCEC",
            marginHorizontal: 20,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
}
