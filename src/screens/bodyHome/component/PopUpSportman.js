import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default function PopUpSportman() {
  return (
    <ScrollView
      style={{
        width: "100%",
        paddingTop: 20,
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
        <Image
          style={styles.Localizacion}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/bdseh7d8e6l-1419%3A29419?alt=media&token=e152bd53-e415-4b1e-8f2d-3b0bf183e035",
          }}
        />

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
        <Image
          style={styles.Deporte}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/3bhmeq2xiix-1419%3A29425?alt=media&token=2e97a416-f60d-4673-a5a7-0fa8d13c205d",
          }}
        />
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
        <Image
          style={styles.Fecha}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/72olmmulnzg-1419%3A29432?alt=media&token=4383a584-09f6-4790-8cf8-209076d74729",
          }}
        />

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

const styles = StyleSheet.create({
  Localizacion: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  Deporte: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  Fecha: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
