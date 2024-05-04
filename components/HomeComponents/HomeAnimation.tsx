import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LottieView from 'lottie-react-native';
import Colors from '@/constants/Colors';
import LoadingAnimation from './Loading';

const HomeAnimation = () => {
    const animation = useRef(null);
    const [showAnimation, setShowAnimation] = useState(false);

    const StartTimeOut =  () => {
      setTimeout(() => {
        setShowAnimation(true);
      },3000)
    }

    useEffect(()=>{
      StartTimeOut();

      return () => {
        StartTimeOut();
      }

    },[])
    

  return (
    <View style={{flexDirection:"row",alignItems:"flex-start",padding:10,marginTop:10,width:"100%"}}>
       <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 50,
          height: 50,
          shadowColor:"pink",
          elevation:5,
        }}
        source={require('../../assets/animations/bgA.json')}
      />
      <View>
      <View style={{backgroundColor:Colors.root.aiText,padding:5,borderRadius:15,width:"90%"}}>
        <Text style={{color:Colors.root.text,padding:3}}>Hello Raskan , i am you personal assistant Ali  </Text>
      </View>

      {
        showAnimation ? 
        <View style={{backgroundColor:Colors.root.aiText,padding:5,borderRadius:15,width:"90%",marginTop:10}}>
         <Text style={{color:Colors.root.text,padding:3}}>how can i help you today?</Text>
        </View> : 
         <LoadingAnimation />
      }
      </View>
    </View>
  )
}

export default HomeAnimation

const styles = StyleSheet.create({})