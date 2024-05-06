import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from '../userAvatar'
import Colors from '@/constants/Colors'
import { BlurView } from 'expo-blur'
import { useUserStore } from '@/store/useUserStore'

const UserResponse = ({index,message,userAvatar}:any) => {
  const {photoUrl} = useUserStore()
  return (
    <View key={index} style={{width:"100%",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",marginTop:5,marginBottom:5}}>
    <UserAvatar avatar={photoUrl === "" ? userAvatar : photoUrl}  />
    <BlurView key={index} style={{margin:5,width:"70%",alignItems:"flex-start",justifyContent:"flex-start",padding:10,overflow:"hidden",borderRadius:15}}>
        <Text style={{color:"#fff",fontSize:15,textTransform:"capitalize",padding:3}}>{message}</Text>
    </BlurView>
</View>
  )
}

export default UserResponse

const styles = StyleSheet.create({})