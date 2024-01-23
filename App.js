import { StyleSheet, Text, View } from "react-native";
import LoadingScreen from "./src/screens/home/LoadingScreen";
import SignIn from "./src/screens/signup/SignIn";
import Login from "./src/screens/signup/Login";
import Home from "./src/screens/home/Home";
import Signup from "./src/screens/signup/SignUp";
import Profile from "./src/screens/profile/Profile";
import ManageAccount from "./src/screens/profile/components/manageAccount/ManageAccount";
import EditProfile from "./src/screens/profile/components/manageAccount/components/EditProfile";
import Security from "./src/screens/profile/components/manageAccount/components/EditProfile";
import PaymentDetails from "./src/screens/profile/components/manageAccount/components/PaymentDetails";
import AddCard from "./src/screens/profile/components/manageAccount/components/AddCard";
import FooterNav from "./src/components/FooterNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
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
              route.name !== "Register" &&
              route.name !== "LoadingScreen",
          ),
        })}
      >
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={Signup} />

        {/*----------- Navagacion en Perfil --------*/}
        <Stack.Screen
          options={{ headerShown: true }}
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="ManageAccount"
          component={ManageAccount}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Edit"
          component={EditProfile}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Security"
          component={Security}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Payment"
          component={PaymentDetails}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="AddCard"
          component={AddCard}
        />
      </Stack.Navigator>
      {isFooterShown && <FooterNav />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      "linear-gradient(162deg, red 0%, green 13.24%, black 37.75%, yellow 66.25%, blue 91%, white 103.14%)",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
