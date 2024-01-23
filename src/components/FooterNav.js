import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

export default function FooterNav() {
  const navigation = useNavigation();

  return (
    <View style={styles.continer}>
      <Image
        style={styles.Frame1547756027}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/8fbkw81hc27-1421%3A26605?alt=media&token=86ac1206-c08a-43fe-8cc3-d556284d17e1",
        }}
      />
      <Image
        style={styles.Frame1547756027}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/l2a0xrqm878-1421%3A26612?alt=media&token=fa86477b-c8f9-4eab-8818-7bc24b45e105",
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          style={styles.Frame1547756027}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ividk8s9rl-1421%3A26613?alt=media&token=d17e4fbe-27a0-47f3-a5a9-e134f826505c",
          }}
        />
      </TouchableOpacity>
      <Image
        style={styles.Frame1547756027}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/su01casai4d-1421%3A26614?alt=media&token=1fd8988b-0a6b-4c6b-b781-1ee79db7d887",
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          style={styles.Frame1547756027}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4vn6ovsbwd8-1421%3A26619?alt=media&token=4e467561-ab7f-48b8-a8fa-dd824e3d7c2a",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Frame1547756027: {
    width: 22,
    height: 24.51,
  },
  continer: {
    width: "100%",
    height: 65,
    position: "absolute",
    bottom: 0,
    left: 0,
    // backgroundColor: 'black',
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
  },
});
