import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import UserAvatar from '../userAvatar'
import Colors from '@/constants/Colors'

const AiImage = ({index,url,aiAvatar}:any) => {
  return (
    <View key={index} style={{width:"100%",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}}>
         <View key={index} style={{width:"100%",alignItems:"flex-start",justifyContent:"flex-end",marginTop:10,marginBottom:10,flexDirection:"row"}}>
         <Image  source={{uri:url}} style={{width:250,height:250,resizeMode:"cover",borderRadius:15}}/>
         <UserAvatar avatar={aiAvatar} bc={Colors.root.aiText} />
         </View>
    </View>
  )
}

export default AiImage

const styles = StyleSheet.create({})