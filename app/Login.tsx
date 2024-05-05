import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native'
import React, { useEffect } from 'react'
import Colors from '@/constants/Colors'
import { BlurView } from 'expo-blur';
import Animation from '@/components/Animation';
import {GoogleSignin,GoogleSigninButton,statusCodes}  from "@react-native-google-signin/google-signin"

const Login = ({SignIn}:any) => {
    const icon = require("../assets/png/google.png")

    

  return (
    <View style={{flex:1,width:"100%",alignItems:"center"}}>
      <Animation />
      <View style={[styles.maxBox]}>
        <Text style={styles.title}>ALI</Text>
        <Text style={{color:Colors.root.text,fontSize:15,textTransform:"uppercase"}}>Your personal AI Assistent</Text>
        <Text style={{color:Colors.root.tint,fontSize:13,textAlign:"center",marginTop:5,width:"90%"}}>Get instant conversation and endless entertainment with Ali, your friendly AI companion</Text>
      </View>

        <BlurView style={styles.btn} intensity={95} tint='dark'>
            <TouchableOpacity style={styles.btn} onPress={SignIn}>
                <Image source={icon} style={{width:30,height:30,resizeMode:"cover",padding:10}} />
                <Text style={{color:"#FFFFFF90",fontSize:17,textTransform:"capitalize"}}>Continue with google </Text>
            </TouchableOpacity>
        </BlurView>

        <Text style={{color:Colors.root.tint,fontSize:13,textAlign:"center",marginTop:10,width:"90%"}}>.  .  .</Text>
      

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    maxBox:{
        width:"100%",
        height:400,
        alignItems:"center"
    },
    title:{
        fontSize:100,
        color:Colors.root.text,
        fontStyle:"normal",
        fontWeight:"300"

    },
    btn:{
        width:"95%",
        padding:5,
        alignItems:"center",
        borderRadius:15,
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        overflow:"hidden"
    }
})