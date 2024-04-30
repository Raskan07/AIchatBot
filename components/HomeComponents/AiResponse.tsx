import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserAvatar from '../userAvatar'
import Colors from '@/constants/Colors'

const AiResponse = ({index,message,aiAvatar}:any) => {
  return (
    <View key={index} style={{width:"100%",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}}>
        <View
        key={index} style={{margin:5,width:"70%",alignItems:"flex-end",justifyContent:"flex-end",padding:10,overflow:"hidden",borderRadius:15,backgroundColor:"#10b981"}}>
            <Text style={{color:"#fff",fontSize:15,textTransform:"capitalize",textAlign:"right"}}>{message}</Text>
        </View>
        <UserAvatar avatar={aiAvatar} bc={Colors.root.aiText} />
    </View>
  )
}

export default AiResponse

const styles = StyleSheet.create({})