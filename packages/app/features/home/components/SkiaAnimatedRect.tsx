import { Canvas, Rect } from '@shopify/react-native-skia'
import { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

const SkiaAnimatedRect = () => {
  const x = useSharedValue(0)
  useEffect(() => {
    x.value = withRepeat(
      withSequence(
        withTiming(100, { duration: 1000 }),
        withTiming(0, { duration: 1000 })
      ),
      -1
    )
  }, [x])
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }],
    }
  }, [x])

  return (
    <>
      <Canvas>
        <Rect x={x} y={0} width={100} height={100} color="blue" />
      </Canvas>
      <Animated.View
        style={[
          animatedStyle,
          {
            width: 100,
            height: 100,
            backgroundColor: 'pink',
          },
        ]}
      ></Animated.View>
    </>
  )
}
export default SkiaAnimatedRect
