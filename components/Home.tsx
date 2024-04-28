import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions,Image } from 'react-native'
import React, { useState } from 'react'
import HomeAnimation from './HomeAnimation'
import Colors from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { dummyMessage } from '@/assets/data/messages';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import UserAvatar from './userAvatar';

const Home = () => {
    const a = "https://i.insider.com/5739f6f2dd0895cd528b4668?width=800&format=jpeg&auto=webp"
    const [chatActive,setChatActive] = useState(false)
    const {width} = useWindowDimensions();
    const customWidth = width * 0.98
    const aiAvatar = "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/91/f3/96/91f3961c-9801-239a-489c-389480b3a04a/AppIcon-0-0-1x_U007epad-0-0-85-220.png/512x512bb.jpg"
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",width:"100%"}}>
        <View style={{flex:1}}>
            {!chatActive && <HomeAnimation />}

            {chatActive && 
            <ScrollView style={{flex:1,marginTop:40,width:customWidth}} bounces={false} showsHorizontalScrollIndicator={false}>
                {
                    dummyMessage.map((message,index) => {
                        if(message.role === "assistent"){
                            if(message.content.includes('https')){
                                return(
                                    <View key={index} style={{width:"100%",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}}>
                                        <View key={index} style={{width:"100%",alignItems:"flex-start",justifyContent:"flex-end",marginTop:10,marginBottom:10,flexDirection:"row"}}>
                                        <Image  source={{uri:message.content}} style={{width:250,height:250,resizeMode:"cover",borderRadius:15}}/>
                                        <UserAvatar avatar={aiAvatar} bc={Colors.root.aiText} />
                                        </View>
                                    </View>
                                ) //ai image
                            }else{
                                return(
                                    <View key={index} style={{width:"100%",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"}}>
                                    <View
                                     key={index} style={{margin:5,width:"70%",alignItems:"flex-end",justifyContent:"flex-end",padding:10,overflow:"hidden",borderRadius:15,backgroundColor:"#10b981"}}>
                                         <Text style={{color:"#fff",fontSize:15,textTransform:"capitalize",textAlign:"right"}}>{message.content}</Text>
                                    </View>
                                    <UserAvatar avatar={aiAvatar} bc={Colors.root.aiText} />
                                    </View>
                                ) // ai message
                            } 
                        }else{
                            return (
                                <View key={index} style={{width:"100%",alignItems:"center",justifyContent:"flex-start",flexDirection:"row",marginTop:5,marginBottom:5}}>
                                    <UserAvatar avatar={a}  />
                                    <BlurView key={index} style={{margin:5,width:"70%",alignItems:"flex-start",justifyContent:"flex-start",padding:10,overflow:"hidden",borderRadius:15}}>
                                        <Text style={{color:"#fff",fontSize:15,textTransform:"capitalize",padding:3}}>{message.content}</Text>
                                    </BlurView>
                                </View>
                            ) // user text message
                        }
                    })
                }
            </ScrollView>}
        </View>
        <TouchableOpacity style={{marginTop:50}} onPress={() => setChatActive(true)}>
            <FontAwesome name="microphone" size={50} color="#FFF" />
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})