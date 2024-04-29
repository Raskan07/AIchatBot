import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions,Image, TextInput } from 'react-native'
import React, {useState } from 'react'
import HomeAnimation from './HomeAnimation'
import Colors from '@/constants/Colors'
import { FontAwesome,FontAwesome6,MaterialIcons } from '@expo/vector-icons';
import { dummyMessage } from '@/assets/data/messages';
import { BlurView } from 'expo-blur';
import UserAvatar from './userAvatar';
import { GoogleGenerativeAI } from "@google/generative-ai"




const Home = () => {
    const a = "https://i.insider.com/5739f6f2dd0895cd528b4668?width=800&format=jpeg&auto=webp"
    const [messages,setMessages] = useState<any>([])
    const [recording,setRecording] = useState(false);
    const [userQuery,setUserQuery] = useState('')
    const {width} = useWindowDimensions();
    const customWidth = width * 0.98
    const aiAvatar = "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/91/f3/96/91f3961c-9801-239a-489c-389480b3a04a/AppIcon-0-0-1x_U007epad-0-0-85-220.png/512x512bb.jpg"
    const genAI = new GoogleGenerativeAI('AIzaSyDV7BI4njPDTjJuxX8zehLtFafYfV_dhXw');


    const handleRunAI = async (query:any) => {
        try {
          const model = genAI.getGenerativeModel({ model: "gemini-pro" });
          const prompt = query;
    
          const result = await model.generateContent(prompt);
          const response = result.response;
          const text = response.text();
          console.log("text",text)
    
          setMessages([...messages, { role: "assistent", content: text }]);
    
        } catch (error) {
          console.error("Error running AI:", error);
          // Handle errors gracefully, e.g., display an error message to the user
        }
      };

    // console.log("messages",message);
    console.log(userQuery)

    const handleResponse = () => {
        setMessages([...messages, { role: "user", content: userQuery }]);
        handleRunAI(userQuery);
        setUserQuery(''); 
      };
    
    
    
      


  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",width:"100%"}}>
        <View style={{flex:1}}>
            {dummyMessage.length == 0 && <HomeAnimation />}

            {messages && 
            <ScrollView style={{flex:1,marginTop:40,width:customWidth}} bounces={false} showsHorizontalScrollIndicator={false}>
                {
                    messages.map((message:any,index:any) => {
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


        </View >
            <View style={{marginTop:20,width:"100%",flexDirection:"row",alignItems:"center",gap:10}}  >
                <View style={{flexDirection:"row",padding:5,gap:10,backgroundColor:"#2a2c33",alignItems:"center",justifyContent:"center", borderRadius:30,paddingLeft:10,paddingRight:10}}>
                    <MaterialIcons name="emoji-emotions" size={24} color="gray" />
                    <TextInput
                    value={userQuery}
                    onChangeText={(e) => setUserQuery(e)}
                    placeholder='Ask anything' 
                    placeholderTextColor={"gray"}
                    style={{width:"60%",padding:5,color:"#FFF"}} />
                    <FontAwesome6 name="hashnode" size={24} color="gray"  />
                    <FontAwesome name="camera" size={24} color="gray"   />
                </View>
                <TouchableOpacity onPress={handleResponse}>
                <FontAwesome 
                name="microphone" 
                size={20} 
                color={"#FFF"} 
                style={[{padding:10,borderRadius:30},recording ? {backgroundColor:"#ef4444"} : {backgroundColor:Colors.root.aiText}]}
                />
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Home

const styles = StyleSheet.create({})