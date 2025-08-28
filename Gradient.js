import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Canvas, RadialGradient, Rect, vec } from '@shopify/react-native-skia'

const Gradient = () => {
    const {width , height} = Dimensions.get("screen")
  return (
    <View style={StyleSheet.absoluteFill}>
      <Canvas style={{flex: 1}}>
        <Rect x={0}  y={0} width={width} height={height}>
            <RadialGradient 
            c={vec(width/2,0)}
            r={300}
            colors={['#007AFF' , '#4DA6FF' , '#5AC8FA' , '#ffffff']}
            ></RadialGradient>
           
        </Rect>
      </Canvas>
    </View>
  )
}

export default Gradient

