import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      navigation.navigate("SignIn");
    }, 3000);
    return () => clearTimeout(loadingTimeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F25910", "#F6B99C", "#FFF", "#FEF8F5", "#652794", "#40036F"]}
        style={styles.linearGradient}
      >
        <Image
          style={styles.image}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ki44nk1ipb-1419%3A26538?alt=media&token=5e9d2fb3-e41f-4332-b494-10f6bdae5394",
          }}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 262,
    height: 69,
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;
