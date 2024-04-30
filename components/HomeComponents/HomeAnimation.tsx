import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const HomeAnimation = () => {
    const animation = useRef(null);

  return (
    <View>
       <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 450,
          height: 450,
          shadowColor:"pink",
          elevation:5,
        }}
        source={require('../../assets/animations/bgA.json')}
      />
    </View>
  )
}

export default HomeAnimation

const styles = StyleSheet.create({})