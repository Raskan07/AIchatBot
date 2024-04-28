import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const UserAvatar = ({avatar,bc}:any) => {
  return (
    <View style={[{width:35,height:35,borderRadius:18,alignItems:"center",justifyContent:"center",backgroundColor:bc}]}>
      <Image 
      style={{width:30,height:30,borderRadius:15,resizeMode:"cover",borderWidth:1,borderColor:Colors.root.background}}
      source={{uri:avatar}} />
    </View>
  )
}

export default UserAvatar

const styles = StyleSheet.create({})