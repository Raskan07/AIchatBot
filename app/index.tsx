import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Home";
import Login from "./Login";
import {GoogleSignin,GoogleSigninButton,statusCodes}  from "@react-native-google-signin/google-signin"
import { useEffect, useState } from "react";


export default function Page() {
  const user = !true
  const [isUserSignIn,setUserSignIn] = useState<any>(false);
  const ConfigureGoogleSignIn = () =>{
    GoogleSignin.configure({
      webClientId:"1018502525549-o07g984q7u98je1d3tsaeav16ag80ngj.apps.googleusercontent.com",
      // @ts-ignore
      androidClientId:"1018502525549-5dlmo88ibdtoolt4ujikblh5bh462tqo.apps.googleusercontent.com",
      iosClientId:"1018502525549-defdf6lni8jn71ern1vuj0e1bv8cnbqq.apps.googleusercontent.com",
    })
  }

  useEffect(()=>{
    ConfigureGoogleSignIn();
  })

  const SignIn = async () => {
    console.log("signIn")

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn()
      console.log(JSON.stringify(userInfo.user.id,null,2))
      if(userInfo.user){
        setUserSignIn(true);
      }
      
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={[styles.container,StyleSheet.absoluteFill,{backgroundColor:Colors.root.background}]}>
     {
      isUserSignIn ? <Home /> : <Login SignIn={SignIn} />
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
