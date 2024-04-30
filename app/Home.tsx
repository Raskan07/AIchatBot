import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions,Image, TextInput } from 'react-native'
import React, {useState } from 'react'
import Colors from '@/constants/Colors'
import { FontAwesome,FontAwesome6,MaterialIcons } from '@expo/vector-icons';
import { dummyMessage } from '@/assets/data/messages';
import { GoogleGenerativeAI } from "@google/generative-ai"
import HomeAnimation from '@/components/HomeComponents/HomeAnimation';
import AiImage from '@/components/HomeComponents/AiImage';
import AiResponse from '@/components/HomeComponents/AiResponse';
import UserResponse from '@/components/HomeComponents/UserResponse';




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
                                    <AiImage index={index} url={message.content} aiAvatar={aiAvatar} />
                                ) //ai image
                            }else{
                                return(
                                    <AiResponse index={index} message={message.content} aiAvatar={aiAvatar} />
                                ) // ai message
                            } 
                        }else{
                            return (
                               <UserResponse index={index} message={message.content} userAvatar={a}  />
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