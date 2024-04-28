import Home from "@/components/Home";
import Login from "@/components/Login";
import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={[styles.container,StyleSheet.absoluteFill,{backgroundColor:Colors.root.background}]}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
