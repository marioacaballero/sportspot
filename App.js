import { StyleSheet, Text, View } from "react-native";
import LoadingScreen from "./src/screens/home/LoadingScreen";
import FooterNav from "./src/components/FooterNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { routes } from "./src/utils/routes";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isFooterShown, setIsFooterShown] = useState(true);

  return (
    <NavigationContainer fallback={<LoadingScreen />}>
      <Stack.Navigator
        initialRouteName="LoadingScreen"
        screenOptions={({ route }) => ({
          headerShown: false,
          footerShown: setIsFooterShown(
            route.name !== "SignIn" &&
              route.name !== "Login" &&
              route.name !== "SignUp" &&
              route.name !== "LoadingScreen"
          ),
        })}
      >
        {routes.map((route) => (
          <Stack.Screen
            key={route.path}
            name={route.path}
            component={route.component}
            options={{
              headerShown: route.header,
            }}
          />
        ))}
      </Stack.Navigator>
      {isFooterShown && <FooterNav />}
    </NavigationContainer>
  );
}
