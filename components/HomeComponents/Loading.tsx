import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const LoadingAnimation = () => {
    const animation = useRef(null);

  return (
    <View>
       <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 50,
          height: 50,
          shadowColor:"pink",
          elevation:5,
        }}
        source={require('../../assets/animations/loading.json')}
      />
    </View>
  )
}

export default LoadingAnimation

const styles = StyleSheet.create({})