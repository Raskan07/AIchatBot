import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions,Image, TextInput } from 'react-native'
import React, {useState,useRef, useEffect } from 'react'
import Colors from '@/constants/Colors'
import { FontAwesome,FontAwesome6,MaterialIcons,Octicons } from '@expo/vector-icons';
import HomeAnimation from '@/components/HomeComponents/HomeAnimation';
import AiImage from '@/components/HomeComponents/AiImage';
import AiResponse from '@/components/HomeComponents/AiResponse';
import UserResponse from '@/components/HomeComponents/UserResponse';
import useAiResponse from '@/hooks/useAiResponse';
import LoadingAnimation from '@/components/HomeComponents/Loading';






const Home = () => {
    const a = "https://i.insider.com/5739f6f2dd0895cd528b4668?width=800&format=jpeg&auto=webp"
    const [userQuery,setUserQuery] = useState('')
    const {width} = useWindowDimensions();
    const customWidth = width * 0.98
    const aiAvatar = "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/91/f3/96/91f3961c-9801-239a-489c-389480b3a04a/AppIcon-0-0-1x_U007epad-0-0-85-220.png/512x512bb.jpg"


    const scrollRef =  useRef<any>();
   const {loading,messages,run} = useAiResponse(userQuery);

   const UpdateScrollView = () => {
    setTimeout(() => {
        scrollRef?.current?.scrollToEnd({animated:true})
    })
   }


   const handleResponse = async () => {
    setUserQuery('');
    UpdateScrollView();
    await run();
    UpdateScrollView();
   }

   



  


  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",width:"100%"}}>
        <View style={{flex:1}}>
            {messages.length == 0 && <HomeAnimation  />}

            {messages && 
            <ScrollView
            ref={scrollRef}
             style={{flex:1,marginTop:40,width:customWidth}} bounces={false} showsHorizontalScrollIndicator={false}>
                {
                    messages.map((message:any,index:any) => {
                        const isLastMessage = index === messages.length - 1;
                        const isAssistantMessage = message.role === "assistant";

                        if (loading && isLastMessage) {
                            return <LoadingAnimation key={index} />;
                        }


                        if(message.role === "assistent"){
                            if(message.content.includes('https')){
                                return(
                                    <AiImage index={index} url={message.content} aiAvatar={aiAvatar} />
                                ) //ai image
                            }else{
                                return(
                                    <View>
                                        <AiResponse index={index} message={message.content} aiAvatar={aiAvatar} />              
                                    </View>
                                ) // ai message
                            } 
                        }else{
                            return (
                               <UserResponse index={index} message={message.content} userAvatar={a}  />
                            ) // user text message
                        }
                    }
                    
                    )
                }
            </ScrollView>}


        </View >
            <View style={{marginTop:20,width:"100%",flexDirection:"row",alignItems:"center",gap:10,justifyContent:"space-between"}}  >
                <View style={{flexDirection:"row",padding:5,gap:10,backgroundColor:"#2a2c33",alignItems:"center",justifyContent:"center", borderRadius:30,paddingLeft:10,paddingRight:10,width:"90%"}}>
                    <MaterialIcons name="emoji-emotions" size={24} color="gray"  />
                    <TextInput
                    value={userQuery}
                    onChangeText={(e) => setUserQuery(e)}
                    placeholder='Ask anything..' 
                    placeholderTextColor={"gray"}
                    style={{width:"60%",padding:5,color:"#FFF"}} />
                    <FontAwesome6 name="hashnode" size={24} color="gray"  />
                    <FontAwesome name="camera" size={24} color="gray"   />
                </View>
                <TouchableOpacity onPress={handleResponse} style={{padding:10,backgroundColor:Colors.root.aiText,borderRadius:30,marginRight:10,alignItems:"center"}} >
                <Octicons name="paper-airplane" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Home

const styles = StyleSheet.create({})