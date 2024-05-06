import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import Login from "./Login";
import useSoicalAuth from "@/hooks/useSocialAuth";
import { useUserStore } from "@/store/useUserStore";



export default function Page() {
  const user = !true

  const {SignIn} = useSoicalAuth();
  const {isLogin} = useUserStore()


  return (
    <View style={[styles.container,StyleSheet.absoluteFill,{backgroundColor:Colors.root.background}]}>
     {
      isLogin ? <Home /> : <Login SignIn={SignIn} />
     }
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
