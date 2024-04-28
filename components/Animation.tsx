import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const Animation = () => {
    const animation = useRef(null);
  return (
    <View>
       <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 300,
        }}
        source={require('../assets/animations/AII.json')}
      />
    </View>
  )
}

export default Animation

const styles = StyleSheet.create({})